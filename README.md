<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Para Nayara 💜</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Quicksand:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{
    --night:#241535;
    --plum:#3a2159;
    --pink:#ff7fb0;
    --pink-light:#ffc6df;
    --lavender:#b9a6ff;
    --gold:#ffd873;
    --cream:#fff6fa;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{
    font-family:'Quicksand',sans-serif;
    background:var(--night);
    color:var(--cream);
    overflow-x:hidden;
  }
  h1,h2,h3{font-family:'Fredoka',sans-serif;}

  /* cursor trail hearts */
  .heart-trail{
    position:fixed;
    pointer-events:none;
    font-size:18px;
    z-index:9999;
    animation:floatUp 1.2s ease-out forwards;
  }
  @keyframes floatUp{
    0%{transform:translateY(0) scale(1);opacity:1;}
    100%{transform:translateY(-60px) scale(0.4);opacity:0;}
  }

  /* HERO */
  .hero{
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;
    position:relative;
    background:radial-gradient(circle at 30% 20%, var(--plum), var(--night) 70%);
    overflow:hidden;
    padding:20px;
  }
  .stars{
    position:absolute;
    inset:0;
    background-image:
      radial-gradient(2px 2px at 20% 30%, #fff, transparent),
      radial-gradient(2px 2px at 70% 60%, #fff, transparent),
      radial-gradient(1px 1px at 40% 80%, #fff, transparent),
      radial-gradient(1px 1px at 85% 20%, #fff, transparent),
      radial-gradient(1px 1px at 60% 40%, #fff, transparent);
    opacity:0.5;
    animation:twinkle 4s infinite alternate;
  }
  @keyframes twinkle{from{opacity:0.3;}to{opacity:0.8;}}
  .hero .eyebrow{
    letter-spacing:3px;
    font-size:14px;
    color:var(--lavender);
    text-transform:uppercase;
    margin-bottom:16px;
  }
  .hero h1{
    font-size:clamp(2.5rem,8vw,5rem);
    background:linear-gradient(90deg,var(--pink),var(--gold),var(--lavender));
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
    margin-bottom:20px;
  }
  .hero p{
    max-width:520px;
    font-size:1.1rem;
    color:var(--pink-light);
  }
  .floating-hearts span{
    position:absolute;
    font-size:22px;
    opacity:0.7;
    animation:drift linear infinite;
  }
  @keyframes drift{
    from{transform:translateY(110vh) rotate(0deg);}
    to{transform:translateY(-10vh) rotate(360deg);}
  }
  .scroll-hint{
    margin-top:60px;
    font-size:28px;
    animation:bounce 2s infinite;
  }
  @keyframes bounce{
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(12px);}
  }

  section{
    padding:100px 24px;
    max-width:900px;
    margin:0 auto;
  }
  .reveal{
    opacity:0;
    transform:translateY(40px);
    transition:all 0.9s cubic-bezier(.2,.7,.3,1);
  }
  .reveal.visible{
    opacity:1;
    transform:translateY(0);
  }

  /* SOBRE */
  .about h2{
    text-align:center;
    font-size:2.2rem;
    margin-bottom:16px;
    color:var(--gold);
  }
  .about p{
    text-align:center;
    color:var(--pink-light);
    max-width:600px;
    margin:0 auto;
    line-height:1.7;
  }

  /* MOTIVOS - flip cards */
  .reasons{
    text-align:center;
  }
  .reasons h2{font-size:2.2rem;color:var(--gold);margin-bottom:40px;}
  .cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:22px;
  }
  .card{
    background:linear-gradient(145deg,var(--plum),#2c1a45);
    border-radius:20px;
    padding:28px 18px;
    cursor:pointer;
    transition:transform 0.35s ease, box-shadow 0.35s ease;
    border:1px solid rgba(255,255,255,0.08);
  }
  .card:hover{
    transform:translateY(-10px) scale(1.03);
    box-shadow:0 18px 30px rgba(255,127,176,0.25);
  }
  .card .emoji{font-size:2.2rem;display:block;margin-bottom:10px;}
  .card .front-text{color:var(--pink-light);font-weight:600;}
  .card .back-text{
    display:none;
    color:var(--cream);
    font-size:0.95rem;
    margin-top:8px;
  }
  .card.flipped .front-text{display:none;}
  .card.flipped .back-text{display:block;}

  /* GALERIA */
  .gallery h2{
    text-align:center;font-size:2.2rem;color:var(--gold);margin-bottom:10px;
  }
  .gallery .hint{
    text-align:center;color:var(--lavender);font-size:0.9rem;margin-bottom:36px;
  }
  .grid-photos{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
    gap:16px;
  }
  .photo{
    aspect-ratio:1/1;
    border-radius:18px;
    background:linear-gradient(135deg,var(--pink),var(--lavender));
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2.5rem;
    position:relative;
    overflow:hidden;
    transition:transform 0.4s ease;
  }
  .photo:hover{transform:rotate(-2deg) scale(1.05);}
  .photo img{
    width:100%;height:100%;object-fit:cover;
    position:absolute;inset:0;
    display:none;
  }

  /* CONTADOR */
  .counter{
    text-align:center;
  }
  .counter h2{font-size:2.2rem;color:var(--gold);margin-bottom:10px;}
  .counter p.sub{color:var(--pink-light);margin-bottom:30px;}
  .timer{
    display:flex;
    justify-content:center;
    gap:18px;
    flex-wrap:wrap;
  }
  .timer div{
    background:var(--plum);
    padding:20px 22px;
    border-radius:16px;
    min-width:90px;
  }
  .timer .num{font-size:2rem;font-family:'Fredoka',sans-serif;color:var(--pink);}
  .timer .label{font-size:0.8rem;color:var(--lavender);text-transform:uppercase;}

  /* CARTA */
  .letter{
    text-align:center;
  }
  .letter h2{font-size:2.2rem;color:var(--gold);margin-bottom:24px;}
  .letter-box{
    background:linear-gradient(145deg,#2c1a45,var(--plum));
    border-radius:24px;
    padding:40px 30px;
    max-width:600px;
    margin:0 auto;
    border:1px solid rgba(255,255,255,0.08);
  }
  .letter-box p{
    line-height:1.9;
    color:var(--cream);
    font-size:1.05rem;
  }
  .btn{
    margin-top:26px;
    background:linear-gradient(90deg,var(--pink),var(--lavender));
    border:none;
    padding:14px 30px;
    border-radius:50px;
    font-family:'Fredoka',sans-serif;
    font-size:1rem;
    color:var(--night);
    cursor:pointer;
    transition:transform 0.25s ease;
  }
  .btn:hover{transform:scale(1.06);}

  footer{
    text-align:center;
    padding:60px 20px 80px;
    color:var(--lavender);
    font-size:0.9rem;
  }

  /* confete */
  .confetti{
    position:fixed;
    top:-10px;
    font-size:20px;
    pointer-events:none;
    z-index:9999;
    animation:fall 3s linear forwards;
  }
  @keyframes fall{
    to{transform:translateY(105vh) rotate(360deg);opacity:0.2;}
  }

  @media (prefers-reduced-motion: reduce){
    *{animation:none !important; transition:none !important;}
  }
</style>
</head>
<body>

<div class="hero" id="hero">
  <div class="stars"></div>
  <div class="floating-hearts" id="floatingHearts"></div>
  <p class="eyebrow">um cantinho só pra você</p>
  <h1>Nayara Carlos 💜</h1>
  <p>Esse site existe só porque você existe. Role pra baixo e descubra o motivo. ✨</p>
  <div class="scroll-hint">⬇️</div>
</div>

<section class="about reveal">
  <h2>Sobre nós 💫</h2>
  <p>Esse é um espacinho fofo feito com carinho pra guardar motivos, fotos e uma cartinha especial pra você. Passe o mouse, clique nos cartões e explore — cada cantinho tem um pedacinho de mim aqui dentro.</p>
</section>

<section class="reasons reveal">
  <h2>Motivos pra te amar 🥰</h2>
  <div class="cards">
    <div class="card" onclick="this.classList.toggle('flipped')">
      <span class="emoji">😄</span>
      <p class="front-text">Seu sorriso</p>
      <p class="back-text">Ilumina qualquer dia ruim que eu esteja tendo.</p>
    </div>
    <div class="card" onclick="this.classList.toggle('flipped')">
      <span class="emoji">🫂</span>
      <p class="front-text">Seu carinho</p>
      <p class="back-text">Me faz sentir em casa mesmo longe de casa.</p>
    </div>
    <div class="card" onclick="this.classList.toggle('flipped')">
      <span class="emoji">🎧</span>
      <p class="front-text">Nossas conversas</p>
      <p class="back-text">Podem durar horas e ainda parecem curtas.</p>
    </div>
    <div class="card" onclick="this.classList.toggle('flipped')">
      <span class="emoji">🌸</span>
      <p class="front-text">Seu jeitinho</p>
      <p class="back-text">Único, doce e completamente seu.</p>
    </div>
  </div>
</section>

<section class="gallery reveal">
  <h2>Nossos momentos 📸</h2>
  <p class="hint">(troque estes quadrinhos pelas suas fotos — veja o comentário no código)</p>
  <div class="grid-photos">
    <div class="photo">📸</div>
    <div class="photo">💑</div>
    <div class="photo">🌅</div>
    <div class="photo">🎉</div>
    <div class="photo">🌹</div>
    <div class="photo">☕</div>
  </div>
  <!--
    PARA ADICIONAR FOTOS REAIS:
    Troque cada <div class="photo">EMOJI</div> por:
    <div class="photo"><img src="fotos/sua-foto.jpg" style="display:block;"></div>
    Suba as imagens numa pasta "fotos" no mesmo repositório do GitHub.
  -->
</section>

<section class="counter reveal">
  <h2>Cada segundo conta ⏳</h2>
  <p class="sub">ajuste a data no código para o dia em que tudo começou</p>
  <div class="timer">
    <div><div class="num" id="days">0</div><div class="label">dias</div></div>
    <div><div class="num" id="hours">0</div><div class="label">horas</div></div>
    <div><div class="num" id="minutes">0</div><div class="label">min</div></div>
    <div><div class="num" id="seconds">0</div><div class="label">seg</div></div>
  </div>
</section>

<section class="letter reveal">
  <h2>Uma cartinha pra você 💌</h2>
  <div class="letter-box">
    <p id="letterText">Clique no botão e abra a carta 👇</p>
    <button class="btn" onclick="openLetter()">Abrir carta 💌</button>
  </div>
</section>

<footer>
  feito com 💜 especialmente para Nayara Carlos
</footer>

<script>
  // corações flutuando no hero
  const heartsContainer = document.getElementById('floatingHearts');
  const heartEmojis = ['💜','💗','✨','🌸','💫'];
  for(let i=0;i<18;i++){
    const s = document.createElement('span');
    s.textContent = heartEmojis[Math.floor(Math.random()*heartEmojis.length)];
    s.style.left = Math.random()*100+'%';
    s.style.animationDuration = (6+Math.random()*8)+'s';
    s.style.animationDelay = (Math.random()*6)+'s';
    heartsContainer.appendChild(s);
  }

  // rastro de corações no cursor (interação com a janela)
  document.addEventListener('mousemove', (e)=>{
    if(Math.random() > 0.85){
      const h = document.createElement('div');
      h.className = 'heart-trail';
      h.textContent = ['💜','💗','⭐'][Math.floor(Math.random()*3)];
      h.style.left = e.clientX+'px';
      h.style.top = e.clientY+'px';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(), 1200);
    }
  });

  // animação de rolamento (scroll reveal)
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>observer.observe(el));

  // contador de tempo juntos - AJUSTE A DATA ABAIXO
  const startDate = new Date('2025-01-01T00:00:00');
  function updateCounter(){
    const now = new Date();
    let diff = now - startDate;
    if(diff < 0) diff = 0;
    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff/(1000*60*60))%24);
    const minutes = Math.floor((diff/(1000*60))%60);
    const seconds = Math.floor((diff/1000)%60);
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  setInterval(updateCounter, 1000);
  updateCounter();

  // carta + confete
  function openLetter(){
    document.getElementById('letterText').textContent =
      "Nayara, cada dia ao seu lado (ou pensando em você) é um presente. Você traz leveza, carinho e cor pros meus dias. Esse site é só uma forma pequena de mostrar o quanto você é especial pra mim. Te amo. 💜";
    burstConfetti();
  }

  function burstConfetti(){
    const emojis = ['💜','✨','🎉','💗','🌸'];
    for(let i=0;i<40;i++){
      const c = document.createElement('div');
      c.className = 'confetti';
      c.textContent = emojis[Math.floor(Math.random()*emojis.length)];
      c.style.left = Math.random()*100+'vw';
      c.style.animationDuration = (2.5+Math.random()*2)+'s';
      document.body.appendChild(c);
      setTimeout(()=>c.remove(), 4500);
    }
  }
</script>

</body>
</html>