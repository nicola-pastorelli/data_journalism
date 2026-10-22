# Italia sismica: una storia di terremoti

Progetto di data journalism sulla sismicità del territorio italiano, che ha previsto la raccolta dei dati INGV, la creazione di visualizzazioni, lo sviluppo di un modello predittivo della magnitudo e la realizzazione di una pagina web interattiva.

---

## Visualizza la pagina web

[Italia sismica: una storia di terremoti](https://nicola-pastorelli.github.io/data_journalism/webpage/)

---

## Struttura del repository

```
data_journalism/
│
├── .github/
│   └── workflows/
│       └── static.yml
│
├── data/
│   └── terremoti.json
│
├── docs/
│   ├── report.pdf
│   ├── slide.pdf
│   └── studio_prevenzione_sismica.pdf
│
├── encoder/
│   └── preprocessor.pkl
│
├── images/
│   ├── costi_demografici_terremoti.png
│   ├── costi_indiretti_terremoti.png
│   ├── densità_terremoti_per_regione.png
│   ├── favicon.png
│   ├── magnitudo_media_per_area.png
│   ├── magnitudo_media_per_decennio.png
│   ├── rete_sismica_nazionale.png
│   ├── stanziamenti_eventi_ricostruzione.png
│   ├── terremoti_per_anno.png
│   ├── terremoti_per_area.png
│   └── terremoti_per_decennio.png
│
├── map/
│   └── top_earthquakes.html
│
├── model/
│   └── xgb_magnitude_model.pkl
│
├── notebooks/
│   ├── 01_data_collection.ipynb
│   ├── 02_data_preparation.ipynb
│   ├── 03_data_exploration.ipynb
│   ├── 04_model_preparation.ipynb
│   ├── 05_model.ipynb
│   ├── 06_test_model.ipynb
│   └── 07_csv_to_json.ipynb
│
├── webpage/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── w3.css
│
├── .gitignore
└── README.md
```

### `.github/workflows/`

- `static.yml`: workflow GitHub Actions per la pubblicazione della pagina tramite GitHub Pages.

### `data/`

- `terremoti.json`: dataset JSON utilizzato dalla mappa interattiva nella pagina.

### `docs/`

- `report.pdf`: report del progetto.
- `slide.pdf`: presentazione del progetto.
- `studio_prevenzione_sismica.pdf`: documento di sintesi dello studio sulla prevenzione sismica.

### `encoder/`

- `preprocessor.pkl`: preprocessore utilizzato dal modello per trasformare le feature prima della previsione.

### `images/`

Immagini utilizzate nella pagina: grafici, immagine della Rete Sismica Nazionale (fonte INGV) e favicon.

### `map/`

- `top_earthquakes.html`: mappa Folium degli otto principali eventi sismici, incorporata nella pagina.

### `model/`

- `xgb_magnitude_model.pkl`: modello XGBoost per la previsione della magnitudo.

### `notebooks/`

- `01_data_collection.ipynb`: raccolta dei dati sismici tramite API INGV.
- `02_data_preparation.ipynb`: preparazione dei dati mediante la creazione di nuove feature.
- `03_data_exploration.ipynb`: esplorazione dei dati mediante grafici e mappe.
- `04_model_preparation.ipynb`: preparazione delle feature per il modello e suddivisione dei dati in dev e test.
- `05_model.ipynb`: addestramento e validazione del modello.
- `06_test_model.ipynb`: test del modello mediante un esempio di previsione della magnitudo.
- `07_csv_to_json.ipynb`: conversione dei dati da CSV a JSON per la mappa interattiva.

### `webpage/`

- `index.html`: pagina web con testo, grafici e mappe.
- `script.js`: funzioni JavaScript per sidebar, galleria e tooltip.
- `style.css`: foglio di stile con regole per layout, tipografia e responsive design.
- `w3.css`: foglio di stile del framework W3.CSS.

### `.gitignore`

- Esclude dal repository i file CSV presenti nella cartella `data/`.

---

## Autori

- Arcangelo Franco  
- Nicola Pastorelli