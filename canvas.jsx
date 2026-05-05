/* ============ Pontos: Background canvas + scroll reveal hooks ============ */

const { useEffect, useRef, useState, useCallback, useMemo } = React;

/* ====== Animated wave canvas background ====== */
function BackgroundCanvas({ theme }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h, dpr;
    let mouseX = 0, mouseY = 0, smoothMX = 0, smoothMY = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove);

    // Particles drifting like sea dust
    const N = 80;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));

    let t = 0;

    const draw = () => {
      smoothMX += (mouseX - smoothMX) * 0.05;
      smoothMY += (mouseY - smoothMY) * 0.05;

      const dark = theme !== 'light';
      const fg = dark ? 'rgba(232, 228, 216,' : 'rgba(10, 22, 40,';
      const gold = dark ? 'rgba(201, 169, 110,' : 'rgba(138, 106, 46,';
      const teal = dark ? 'rgba(58, 107, 138,' : 'rgba(58, 107, 138,';

      ctx.clearRect(0, 0, w, h);

      // Soft radial glow following the mouse
      const gx = smoothMX * w;
      const gy = smoothMY * h;
      const grd = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.min(w, h) * 0.6);
      grd.addColorStop(0, gold + '0.10)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Wave lines (multiple layered)
      const waveCount = 4;
      for (let wv = 0; wv < waveCount; wv++) {
        ctx.beginPath();
        const baseY = h * (0.3 + wv * 0.18) + (smoothMY - 0.5) * 30 * dpr;
        const amp = (40 + wv * 25) * dpr;
        const freq = 0.0015 + wv * 0.0006;
        const speed = 0.0006 + wv * 0.0003;
        for (let x = 0; x <= w; x += 6 * dpr) {
          const y = baseY
            + Math.sin(x * freq + t * speed) * amp
            + Math.sin(x * freq * 2.1 + t * speed * 1.7) * amp * 0.4
            + (smoothMX - 0.5) * 40 * dpr;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = (wv === 1 ? gold : teal) + (0.06 + wv * 0.02) + ')';
        ctx.lineWidth = (wv === 1 ? 1.4 : 0.8) * dpr;
        ctx.stroke();
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx * dpr;
        p.y += p.vy * dpr;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        // Repulse from cursor
        const dx = p.x - gx; const dy = p.y - gy;
        const d2 = dx*dx + dy*dy;
        const rad = 140 * dpr;
        if (d2 < rad*rad) {
          const f = (1 - Math.sqrt(d2)/rad) * 1.4;
          p.x += (dx/Math.sqrt(d2+0.01)) * f;
          p.y += (dy/Math.sqrt(d2+0.01)) * f;
        }
        ctx.fillStyle = fg + p.a + ')';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [theme]);

  return <canvas ref={ref} className="bg-canvas" />;
}

/* ====== Custom cursor ====== */
function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let raf;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('mousemove', onMove);

    const onOver = (e) => {
      const t = e.target;
      const hov = t.closest('a, button, .work-item, .service-card, .nav-link, .nav-logo, [data-cursor="hover"]');
      if (ring.current) ring.current.classList.toggle('hover', !!hov);
    };
    document.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  }, []);
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}

/* ====== Scroll reveal ====== */
function useReveal(deps) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in), .reveal-stagger:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, deps || []);
}

/* ====== Live clock ====== */
function useClock() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

/* ====== Mouse spotlight on cards ====== */
function attachSpotlight(el) {
  if (!el) return;
  const onMove = (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };
  el.addEventListener('mousemove', onMove);
  return () => el.removeEventListener('mousemove', onMove);
}

Object.assign(window, {
  BackgroundCanvas, Cursor, useReveal, useClock, attachSpotlight
});
