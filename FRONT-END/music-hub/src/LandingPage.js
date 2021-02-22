import "./LandingPage.css";

function LandingPage() {
  return (
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <img src="" alt="logo" />
        </div>

        <div class="links">
          <a href="">Músicos</a>
          <a href="">Bandas</a>
          <a href="">Sobre Nosotros</a>
        </div>

        <div class="sign">
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </nav>

      <section class="cover">
        <h1>DISCOVER ARTISTS</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          non veniam quod alias, repellat itaque, fugiat illo nostrum cumque quo
          consequuntur provident deserunt neque asperiores!
        </p>

        <form action="get">
          <input type="text" />
        </form>
        <button>SEARCH</button>
      </section>

      <section class="info">
        <div class="sectionTitle">
          <h1>¿Qué puedes hacer en musicHub?</h1>
        </div>
        <div class="sectionContent">
          <div>
            <p>Músicos y bandas que buscan actuaciones</p>
          </div>
          <div>
            <p>Bandas que buscan músicos</p>
          </div>
          <div>
            <p>Músicos que buscan banda</p>
          </div>
        </div>
      </section>

      <section class="artistsSample">
        <h1>Muestra de músicos/bandas</h1>
        <div class="carrousel">
          <img src="" alt="artist1" />
          <img src="" alt="artist2" />
          <img src="" alt="artist3" />
        </div>
      </section>

      <section class="venuesEventsSample">
        <h1>Muestra de locales/eventos</h1>
        <div class="venuesEventsLogos">
          <img src="" alt="venueEvent1" />
          <img src="" alt="venueEvent2" />
          <img src="" alt="venueEvent3" />
        </div>
      </section>

      <section class="contact">
        <form action="post">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Asunto" />
          <input type="textarea" placeholder="Mensaje" />
          <button type="submit">ENVIAR</button>
        </form>
      </section>

      <footer class="footer">
        <img src="" alt="logo" />

        <ul>
          <li>COMPANY</li>
          <li>Sobre nosotros</li>
          <li>Artistas</li>
          <li>Locales/Eventos</li>
        </ul>

        <ul>
          <li>LINKS DE INTERÉS</li>
          <li>FAQ</li>
          <li>Legal</li>
          <li>Contacto</li>
          <li>Política de privacidad</li>
        </ul>
      </footer>
    </div>
  );
}

export default LandingPage;
