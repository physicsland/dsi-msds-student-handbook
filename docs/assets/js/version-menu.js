<script>
document.addEventListener("DOMContentLoaded", function() {
    // Find all right-side nav items
    var rightNavItems = document.querySelectorAll('ul.navbar-nav.ms-auto li.nav-item .nav-link');

    var versionMenu = null;
    rightNavItems.forEach(function(item) {
        if (item.textContent.trim() === "Versions") {
            versionMenu = item;
        }
    });

    if (!versionMenu) return;

    // Replace the "Versions" text with the dropdown
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

document.addEventListener("DOMContentLoaded", function() {
    // Existing code for version menu here...

    // Find the right-side nav (where Versions menu is)
    var version = document.querySelector('meta[name="dcterms.date"]').content.slice(0,4);
    versionBadge.textContent = ' ' + version;
    var rightNav = document.querySelector('ul.navbar-nav.ms-auto');

    if (rightNav) {
        var li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = '<span class="nav-link"><strong>Version: '+ versionBadge +'</strong></span>';
        rightNav.appendChild(li);
    }
});
</script>
