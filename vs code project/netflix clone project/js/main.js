/* Shared UI functions for Netflix clone */

function getPoster(movie, index) {
  if (movie.img && !movie.img.includes("0Y0Y0Y")) return movie.img;
  const goodPosters = [
    "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    "https://image.tmdb.org/t/p/w500/7vjaCdMw15OAacy7vNsYr5ZYV3E.jpg",
    "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTTJL0pO.jpg",
    "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    "https://image.tmdb.org/t/p/w500/1M876KPjeXrZ2zC3zQKeH6wX2tP.jpg",
    "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygcjZvq.jpg",
    "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrk50FVBU1W.jpg",
    "https://image.tmdb.org/t/p/w500/vDGr1YdrRig9wGqeL7Y6V8g1v8.jpg",
    "https://image.tmdb.org/t/p/w500/5NPEjJECLWb1NvF3BM4b7gN8x0A.jpg",
    "https://image.tmdb.org/t/p/w500/th4E1yqsE8DGpAseLiUrI60zs8N.jpg",
    "https://image.tmdb.org/t/p/w500/ui4DrH1cKk2vkHshcUc7aUaDw0w.jpg",
    "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VdO60fu7adg.jpg",
    "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo27zDsZph2l0.jpg",
    "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg"
  ];
  return goodPosters[index % goodPosters.length];
}

function createPoster(movie, index, isTop10 = false) {
  const posterUrl = getPoster(movie, index);
  const poster = document.createElement("div");
  poster.className = "poster";
  poster.dataset.id = movie.id;

  if (isTop10) {
    poster.innerHTML = `
      <span class="rank">${movie.rank || index + 1}</span>
      <img src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/160x230/333/fff?text=${encodeURIComponent(movie.title)}'" />
    `;
  } else {
    poster.innerHTML = `
      <img src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/240x135/333/fff?text=${encodeURIComponent(movie.title)}'" />
      <div class="poster-overlay">
        <div class="poster-title">${movie.title}</div>
        <div class="poster-meta"><span>${movie.match || "90% Match"}</span><span style="color:#fff">${movie.year || ""}</span></div>
        <div class="poster-actions">
          <button class="play-btn" title="Play"><i class="fas fa-play"></i></button>
          <button title="Add to My List"><i class="fas fa-plus"></i></button>
          <button title="Like"><i class="fas fa-thumbs-up"></i></button>
          <button class="info-btn" title="More Info"><i class="fas fa-chevron-down"></i></button>
        </div>
      </div>
    `;
  }

  poster.addEventListener("click", (e) => {
    openModal(movie, posterUrl);
  });
  return poster;
}

function createRow(title, movieList, isTop10 = false) {
  const row = document.createElement("section");
  row.className = `row ${isTop10 ? "top10" : ""}`;
  row.innerHTML = `
    <h2 class="row-title">${title}</h2>
    <div class="row-container">
      <button class="row-arrow left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
      <div class="row-posters"></div>
      <button class="row-arrow right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
    </div>
  `;
  const postersContainer = row.querySelector(".row-posters");
  movieList.forEach((movie, i) => postersContainer.appendChild(createPoster(movie, i, isTop10)));

  row.querySelector(".row-arrow.left").addEventListener("click", () => postersContainer.scrollBy({ left: -600, behavior: "smooth" }));
  row.querySelector(".row-arrow.right").addEventListener("click", () => postersContainer.scrollBy({ left: 600, behavior: "smooth" }));
  return row;
}

function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

function openModal(movie, imgUrl) {
  const modal = document.getElementById("modal");
  if (!modal) return;
  document.getElementById("modalImg").src = imgUrl || getPoster(movie, 0);
  document.getElementById("modalTitle").textContent = movie.title;
  document.getElementById("modalMatch").textContent = movie.match || "90% Match";
  document.getElementById("modalYear").textContent = movie.year || "";
  document.getElementById("modalRating").textContent = movie.rating || "TV-MA";
  document.getElementById("modalDuration").textContent = movie.duration || "";
  document.getElementById("modalDesc").textContent = movie.desc || "No description available.";
  document.getElementById("modalCast").textContent = movie.cast || "Various";
  document.getElementById("modalGenres").textContent = movie.genres || "Drama";
  document.getElementById("modalTags").textContent = movie.tags || "Exciting";
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function initModal() {
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  const infoBtn = document.querySelector(".btn-info");
  if (infoBtn && typeof movies !== "undefined") {
    infoBtn.addEventListener("click", () => openModal(movies.continueWatching[0], document.querySelector(".hero-img")?.src));
  }
  document.querySelectorAll(".btn-play").forEach(btn => {
    btn.addEventListener("click", () => alert("Frontend-only clone — video playback not implemented."));
  });
}
