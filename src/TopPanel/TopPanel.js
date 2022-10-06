// import './TopPanel/indexCSS.css';

function TopPanel() {
  return (
    <div class="navbar sticky-top navbar-expand-md navbar-light bg-light" aria-label="navbar">
        <div class="container-fluid">
            <a class="navbar-brand me-4 pt-1" href="/index">
                <img src="/public/images/long_logo.png" alt="logo" height="22px"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggle"
                aria-controls="navToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navToggle">
                <ul class="navbar-nav ms-auto align-items-center me-auto mb-2 mb-md-0">
                    <li class="nav-item px-2">
                        <a class="nav-link active" aria-current="page" href="/index">Home</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link active" aria-current="page" href="/about">About</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link active" aria-current="page" href="/faq">FAQ</a>
                    </li>
                </ul>
                <div class="text-center" style="display: flex;">
                    {/* sec:authorize="!isAuthenticated() */}
                    <a href="/login">
                        <button type="button" class="btn btn-sm btn-outline-primary me-2">
                            Login
                        </button>
                    </a>
                    <a href="/dashboard">
                        <button type="button" class="btn btn-sm btn-primary me-2">
                            Dashboard
                        </button>
                    </a>
                    <a href="/logout">
                        <button type="button" class="btn btn-sm btn-outline-primary me-2">
                            Log Out
                        </button>
                    </a>
                    <a href="/register">
                        <button type="button" class="btn btn-sm btn-primary me-2">
                            Sign-up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopPanel;
