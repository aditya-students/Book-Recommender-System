# 📖 The Bibliotheca — Book Recommender System

> *A Curated Reading Society*

A Flask-based book recommender system that showcases the **Top 50 most popular books** and provides **personalized book recommendations** using collaborative filtering. Styled with a beautiful vintage library theme.

---

## ✨ Features

- **Top 50 Books** — Browse the most popular books ranked by reader votes and ratings
- **Book Recommendations** — Enter a book title and discover 10 similar reads powered by collaborative filtering
- **Sort & Filter** — Sort books by Ranking, Rating, or Title (A–Z)
- **Pagination** — Navigate through books 10 at a time
- **Vintage Theme** — A premium "Bibliotheca" design with warm parchment tones, gold accents, and elegant typography
- **Responsive Design** — Fully responsive across desktop, tablet, and mobile

---

## 🖼️ Screenshots

### Homepage — Top 50 Books
The homepage displays a curated grid of the top 50 books with cover images, ratings, vote counts, and sort/filter options.

### Recommend Page
Enter any book title to receive 10 similar book recommendations based on collaborative filtering similarity scores.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Python, Flask |
| **Frontend** | HTML5, CSS3, JavaScript |
| **Templating** | Jinja2 (with template inheritance) |
| **ML Model** | Collaborative Filtering (cosine similarity) |
| **Data** | Pickle files (`.pkl`) for pre-computed data |
| **Fonts** | Playfair Display, EB Garamond (Google Fonts) |

---

## 📁 Project Structure

```
Book-Recommender-System/
├── app.py                  # Flask application (routes & logic)
├── requirements.txt        # Python dependencies
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
├── popular.pkl             # Top 50 popular books data (not in repo)
├── books.pkl               # Full books dataset (not in repo)
├── pt.pkl                  # Pivot table for recommendations (not in repo)
├── similarity_score.pkl    # Pre-computed similarity matrix (not in repo)
├── templates/
│   ├── base.html           # Shared layout (header, footer, fonts)
│   ├── index.html          # Top 50 Books page
│   └── recommend.html      # Book Recommender page
└── static/
    ├── css/
    │   └── vintage.css     # Vintage library theme styles
    └── js/
        └── vintage.js      # Animations, sorting & pagination logic
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- pip

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aditya-students/Book-Recommender-System.git
   cd Book-Recommender-System
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Add data files**

   Place the following pre-computed pickle files in the project root:
   - `popular.pkl` — Top 50 popular books DataFrame
   - `books.pkl` — Complete books dataset
   - `pt.pkl` — User-book pivot table
   - `similarity_score.pkl` — Cosine similarity matrix

   > ⚠️ These files are too large for GitHub and must be generated separately or obtained from the data pipeline.

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Open in browser**
   ```
   http://127.0.0.1:5000
   ```

---

## 📡 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Homepage — displays Top 50 books |
| `GET` | `/recommend` | Recommender page with search form |
| `POST` | `/recommend_books` | Returns 10 similar book recommendations |

---

## 🎨 Design Theme

The frontend uses a **"Vintage Library"** aesthetic called **The Bibliotheca**:

- **Color Palette** — Warm parchment backgrounds, dark wood headers, and gold accent highlights
- **Typography** — *Playfair Display* for headings, *EB Garamond* for body text
- **Micro-Animations** — Staggered card fade-ins, hover lifts, glowing search focus
- **Responsive Grid** — 4 columns → 3 → 2 → 1 across breakpoints

---

## 🤖 How the Recommender Works

1. A **user-book interaction matrix** (pivot table) is created from the dataset
2. **Cosine similarity** is computed between all books in the pivot table
3. When a user searches for a book title, the system finds the top 10 most similar books based on the pre-computed similarity scores
4. Results are displayed with book covers, titles, and authors

---

## 📦 Dependencies

```
flask
numpy
pandas
gunicorn
```

---

## 📝 License

This project is open source and available for educational purposes.

---

<p align="center">
  <em>❧ ✦ ❧</em><br>
  <strong>The Bibliotheca</strong> — A Curated Reading Society
</p>
