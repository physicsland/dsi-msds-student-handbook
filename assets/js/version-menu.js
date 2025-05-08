<script>
document.addEventListener("DOMContentLoaded", function() {

// --------------------------
// 1. Replace Versions nav with dropdown
// --------------------------

var rightNavItems = document.querySelectorAll('ul.navbar-nav.ms-auto li.nav-item .nav-link');
var versionMenu = null;
rightNavItems.forEach(function(item) {
    if (item.textContent.trim() === "Versions") {
        versionMenu = item;
    }
});

if (versionMenu) {
    versionMenu.innerHTML = `
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Versions
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="/dsi-msds-student-handbook/">2025 (Current)</a></li>
                <li><a class="dropdown-item" href="/dsi-msds-student-handbook/2024/">2024</a></li>
            </ul>
        </div>
    `;
}

// --------------------------
// 2. Extract year from meta tag
// --------------------------

var year = 'Unknown';
var dateMeta = document.querySelector('meta[name="dcterms.date"]');
if (dateMeta) {
    year = dateMeta.content.slice(0, 4);
}

// --------------------------
// 3. Add badge to the title (center)
// --------------------------

var titleEl = document.querySelector('.navbar-title');
if (titleEl) {
    var versionBadge = document.createElement('span');
    versionBadge.textContent = ' ' + year;
    versionBadge.className = 'badge bg-secondary';
    titleEl.appendChild(versionBadge);
}

// --------------------------
// 4. Add Version text to right nav
// --------------------------

var rightNav = document.querySelector('ul.navbar-nav.ms-auto');
if (rightNav) {
    var li = document.createElement('li');
    li.className = 'nav-item';
    li.innerHTML = '<span class="nav-link"><strong>Version: ' + year + '</strong></span>';
    rightNav.appendChild(li);
}

});
</script>
