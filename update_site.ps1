$files = Get-ChildItem "c:\Users\USER\Desktop\IA ass\*.html" -Exclude "index.html"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content $file.FullName -Raw

    # 1. HEADER REPLACEMENT (Maintain consistency)
    $newHeader = '<header id="header">
    <div class="header-container">
        <!-- Logo removed from header as per new layout -->
        <div class="banner-container">
            <img src="images/header.png" alt="APU Volleyball Club Banner" class="header-banner">
        </div>
    </div>
</header>'
    
    $content = $content -replace '(?s)<header id="header">.*?</header>', $newHeader
    
    # 2. NAVIGATION REPLACEMENT (Dropdown Structure)
    # Note: dropbtn class is used for parent items.
    $navTemplate = '<nav id="navbar">
    <ul>
        <li><a href="index.html">Home</a></li>
        
        <li class="dropdown">
            <a href="#" class="dropbtn">About Club</a>
            <div class="dropdown-content">
                <a href="mission.html">Mission</a>
                <a href="history.html">History</a>
                <a href="committee.html">Committee</a>
                <a href="coaches.html">Coaches</a>
            </div>
        </li>

        <li class="dropdown">
            <a href="#" class="dropbtn">Guidelines</a>
            <div class="dropdown-content">
                <a href="attire.html">Attire</a>
                <a href="rules.html">Rules</a>
                <a href="safety.html">Safety</a>
            </div>
        </li>

        <li class="dropdown">
            <a href="#" class="dropbtn">Activities</a>
            <div class="dropdown-content">
                <a href="events.html">Events</a>
                <a href="achievements.html">Achievements</a>
                <a href="news.html">News</a>
            </div>
        </li>

        <li class="dropdown">
            <a href="#" class="dropbtn">Contact</a>
            <div class="dropdown-content">
                <a href="register.html">Register</a>
                <a href="enquiry.html">Enquiry</a>
                <a href="feedback.html">Feedback</a>
            </div>
        </li>
    </ul>
</nav>'

    # Dynamic Active Class Injection
    $fileName = $file.Name
    # Replace href="filename.html" with href="filename.html" class="active"
    # This works for items inside dropdowns too
    $navWithActive = $navTemplate -replace "href=""$fileName""", "href=""$fileName"" class=""active"""
    
    # Replace existing nav block
    if ($content -match '(?s)<nav.*?>.*?</nav>') {
        $content = $content -replace '(?s)<nav.*?>.*?</nav>', $navWithActive
    } else {
        $content = $content -replace '</header>', "</header>`n$navWithActive"
    }

    # 3. FOOTER REPLACEMENT (Maintain consistency)
    $newFooter = '<footer id="footer">
    <div class="footer-image-container">
        <img src="images/footer.png" alt="APU Volleyball Club Footer" class="footer-image">
    </div>
    <div class="footer-content">
        <p>&copy; 2025 APU Volleyball Club. All rights reserved.</p>
        <p>Contact: <a href="mailto:volleyball@apu.edu.my">volleyball@apu.edu.my</a></p>
    </div>
</footer>'

    $content = $content -replace '(?s)<footer id="footer">.*?</footer>', $newFooter

    # 4. REMOVE 'BACK TO HOME' BUTTONS
    # Pattern: <a href="index.html"><button>Back to Home</button></a>
    # We use -replace with a regex that handles potential whitespace
    $content = $content -replace '(?s)<a href="index.html">\s*<button>Back to Home</button>\s*</a>', ''
    
    Set-Content -Path $file.FullName -Value $content
}
