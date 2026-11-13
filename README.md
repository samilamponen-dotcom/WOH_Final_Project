# PokéApp

Web-ohjelmointikurssin projektityö. PokéAppilla voi selata Pokémon-listaa, hakea Pokémoneja nimellä ja sukupolvella, tarkastella yksittäisen Pokémonin tietoja sekä vertailla enintään kolmea Pokémonia.

Pokémon-tiedot haetaan [PokéAPIsta](https://pokeapi.co/).

## Ominaisuudet

- Pokémonien selaaminen ja suodattaminen sukupolven mukaan
- Haku Pokémonin nimellä
- Sivutettu Pokémon-lista
- Pokémonin tietosivu: kuva, tyypit, pituus, paino, kyvyt ja perustilastot
- Enintään kolmen Pokémonin tilastojen vertailu
- Responsiivinen käyttöliittymä

## Käyttöönotto

Tarvitset [Node.js 22:n](https://nodejs.org/) ja npm:n.

```bash
npm ci
npm run dev
```

Vite käynnistää kehityspalvelimen ja näyttää paikallisen osoitteen terminaalissa.

## Komennot

```bash
npm run dev      # Käynnistä kehityspalvelin
npm run build    # Rakenna tuotantoversio dist-kansioon
npm run preview  # Esikatsele tuotantoversiota paikallisesti
npm run lint     # Tarkista koodi ESLintillä
```

## Teknologiat

- React ja Vite
- React Router
- Bootstrap
- Chart.js ja react-chartjs-2
- react-select
- PokéAPI

## Projektin rakenne

```text
src/
  components/   Uudelleenkäytettävät käyttöliittymäkomponentit
  hooks/        Pokémon-tietojen hakemiseen käytettävät hookit
  pages/        Etusivu, Pokémonin tietosivu ja vertailusivu
  api.js        PokéAPI-kutsut
```

## Julkaisu

Projekti julkaistaan GitHub Pagesiin GitHub Actions -workflow'lla, kun muutoksia viedään `main`-haaraan. Workflow rakentaa sovelluksen ja lisää `404.html`-varasivun, jotta myös sovelluksen alisivut toimivat suoralla latauksella.
