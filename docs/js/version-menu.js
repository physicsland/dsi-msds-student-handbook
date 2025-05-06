document.addEventListener("DOMContentLoaded", function() {
  // Find the placeholder element
  var versionMenu = document.getElementById("version-menu");

  // Defensive check: only continue if the placeholder exists
  if (!versionMenu) return;

  // Inject the dropdown items
  versionMenu.innerHTML = `
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Versions
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="/">2025 (Current)</a></li>
              <li><a class="dropdown-item" href="/2024/">2024</a></li>
          </ul>
      </div>
  `;
});