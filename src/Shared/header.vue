<template>
        <div>
                <nav
                        class="navbar navbar-expand-lg navbar-dark"
                        style="background-color: #563f7a"
                >
                       
                        <router-link class="nav-item" tag="a" to="/urun-listesi">
                                 <a class="navbar-brand" href="#">Ürün Listesi</a>
                                </router-link>
                        <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                        >
                                <ul class="navbar-nav mr-auto">
                                        <router-link
                                                class="nav-item"
                                                tag="li"
                                                to="/urun-islemleri"
                                        >
                                                <a class="nav-link" href=""
                                                        >Ürün İşlemleri</a
                                                >
                                        </router-link>

                                        <router-link
                                                class="nav-item"
                                                tag="li"
                                                to="/urun-cikisi"
                                        >
                                                <a class="nav-link" href=""
                                                        >Ürün cikisi</a
                                                >
                                        </router-link>
                                </ul>
                        </div>
                </nav>
        </div>
</template>