export default function Nav(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
                            <div class="container-fluid">
                            <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarExample01"
                                    aria-controls="navbarExample01"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                            >
                                <i class="fas fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarExample01">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link text-primary" aria-current="page" href="http://localhost:3000/signIn">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" href="http://localhost:3000/register">Register</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" href="http://localhost:3000/products">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-primary" href="http://localhost:3000/auctions">Auctions</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
    )
}