import React from 'react'
import Add from './Add'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar bg-primary" data-bs-theme="dark">
                <nav class="navbar navbar-expand-lg bg-body-primary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/add">MEESHO</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/add">Add proudct</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/search">Search product</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/view">view all</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
            <Add/>
    </div>
  )
}

export default Navbar