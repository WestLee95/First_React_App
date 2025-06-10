## MovieTime 🎬

# View
![MovieTime Screenshot](.assets/Screenshot.png)

**MovieTime** is a responsive, beginner-friendly React application that allows users to search for movies using the [OMDb API](https://www.omdbapi.com/). With real-time input handling and clean UI components, this project demonstrates how to work with APIs, manage application state using React hooks, and build a simple interactive user experience.

---

## 🚀 Features

- **Search movies** by title via the OMDb API
- **Dynamic movie rendering** based on search input
- **Clean and reusable UI components** (`MovieCard`)
- **Responsive layout** with basic CSS styling
- **Handles no-result states** gracefully

---

## 🛠️ Tech Stack

- **React** (functional components with hooks)
- **JavaScript**
- **CSS**
- **OMDb API** for fetching movie data

---

## 🧪 Getting Started

Follow these steps to run the app locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movietime.git
   cd movietime
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:3000`

---

## 🔐 API Key

This app uses the public OMDb API with the following key:
```
http://www.omdbapi.com/?apikey=3bf4b5c3
```
> ⚠️ It's recommended to replace this with your own key from [OMDb API](https://www.omdbapi.com/apikey.aspx) for production use or if you experience rate limits.

---

## 📁 Project Structure

```
src/
├── App.js          # Main component with logic and state
├── MovieCard.js    # Reusable movie card component
├── App.css         # Basic styling
├── search.svg      # Icon used for the search input
```

---

## 📌 How It Works

- The app initializes with a default movie search ("Avengers")
- Users can type into the input field and click the search icon to fetch results
- If movies are found, they are displayed as individual cards
- If no results match, the UI will indicate that no movies were found

---

## 🌟 Potential Enhancements

- Add pagination for broader search result handling
- Integrate a loading spinner while fetching data
- Allow users to view more detailed movie info on click
- Upgrade styling using Tailwind CSS or a UI library

---

## 🤝 Acknowledgments

- [OMDb API](https://www.omdbapi.com/) for the movie data
- React documentation for guidance on hooks and component patterns

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it as needed.

---

For questions, suggestions, or collaboration, feel free to reach out!

