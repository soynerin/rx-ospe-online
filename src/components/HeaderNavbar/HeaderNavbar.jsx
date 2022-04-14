import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const HeaderNavbar = () => {
	useEffect(() => {
		// make it as accordion for smaller screens
		if (window.innerWidth < 992) {
			// close all inner dropdowns when parent is closed
			document.querySelectorAll(".navbar .dropdown").forEach(function (everydropdown) {
				everydropdown.addEventListener("hidden.bs.dropdown", function () {
					// after dropdown is hidden, then find all submenus
					this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
						// hide every submenu as well
						everysubmenu.style.display = "none";
					});
				});
			});

			document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
				element.addEventListener("click", function (e) {
					let nextEl = this.nextElementSibling;
					if (nextEl && nextEl.classList.contains("submenu")) {
						// prevent opening link if link needs to open dropdown
						e.preventDefault();
						if (nextEl.style.display == "block") {
							nextEl.style.display = "none";
						} else {
							nextEl.style.display = "block";
						}
					}
				});
			});
		}
	}, []);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light shadow mb-5 bg-light bg-gradient">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img
							alt="logo-header-navbar"
							src="../images/logo-header.png"
							width="auto"
							height="auto"
							className="d-inline-block align-center"
						/>
					</a>
					<span className="mx-5 fw-bolder fs-2 text-primary text-uppercase d-none d-sm-inline">
						Beneficiarios
					</span>
					<button
						className="navbar-toggler"
						type="button"
						aria-expanded="false"
						data-bs-toggle="offcanvas"
						href="#offcanvasSideMenu"
						role="button"
						aria-controls="offcanvasSideMenu"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse text-uppercase fw-bolder" id="main_nav">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<FontAwesomeIcon icon="fa-solid fa-house-user" /> Inicio
								</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
									<FontAwesomeIcon icon="fa-solid fa-folder" /> Tramites
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Autorizaciones
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Afiliaciones &raquo;
										</a>
										<ul className="submenu dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													Corroboro mis Datos
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Cambio de Domicilio
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Constancia de Afiliacion
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Duplicado de Credencial
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Alta Familiar
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Baja Afiliaciones
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Cambio de Plan
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Reintegros &raquo;
										</a>
										<ul className="submenu dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													Solicitud de Reintegro
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Facturacion &raquo;
										</a>
										<ul className="submenu dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													Consulta Facturacion
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Pagar Cupon de Pago
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Debito Automatico
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Solicitudes, Consultas y Reclamos
												</a>
											</li>
										</ul>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Coseguros
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Certificados | Formularios &raquo;
										</a>
										<ul className="submenu dropdown-menu">
											<li>
												<a className="dropdown-item" href="#">
													Carga Certificado de Embarazo
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Carga Certificado de Estudio
												</a>
											</li>
											<li>
												<a className="dropdown-item" href="#">
													Descarga de Formularios
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
									<FontAwesomeIcon icon="fa-solid fa-table" /> Seguimiento de Solicitudes
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Autorizaciones
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Afiliaciones
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Reintegros
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Certificados
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Facturacion
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Otros Tramites
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
									<FontAwesomeIcon icon="fa-solid fa-laptop-medical" /> Cartilla Medica
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Cartilla Online
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<div class="d-flex">
							<button type="button" class="btn btn-primary w-100">
								<FontAwesomeIcon icon="fa-solid fa-house-user" />
								<span className="text-uppercase"> Hola Neri !!</span>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				class="offcanvas offcanvas-start"
				tabindex="-1"
				id="offcanvasSideMenu"
				aria-labelledby="offcanvasSideMenuLabel"
			>
				<div class="offcanvas-header">
					<button
						type="button"
						class="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<div class="vertical-nav bg-white" id="sidebar">
						<div class="py-4 px-3 mb-4 bg-light">
							<div class="media d-flex align-items-center">
								<div class="media-body">
									<h4 class="m-0">Neri Espinola</h4>
									<p class="font-weight-light text-muted mb-0"> 20-34472866-7/00 </p>
								</div>
							</div>
						</div>

						<ul class="list-group list-group-flush fs-5">
							<li class="list-group-item">Inicio</li>
							<li
								class="list-group-item"
								data-bs-toggle="collapse"
								href="#collapseTramites"
								role="button"
								aria-expanded="false"
								aria-controls="collapseTramites"
							>
								Tramites <FontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
								<div class="collapse" id="collapseTramites">
									<div class="list-group">
										<a href="#" class="list-group-item list-group-item-action">
											Autorizaciones
										</a>
										<a
											class="list-group-item list-group-item-action"
											aria-current="true"
											data-bs-toggle="collapse"
											href="#collapseAfiliaciones"
											role="button"
											aria-expanded="false"
											aria-controls="collapseAfiliaciones"
										>
											Afiliaciones <FontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
											<div class="collapse" id="collapseAfiliaciones">
												<ul class="list-group list-group-flush">
													<li class="list-group-item">Corroboro mis Datos</li>
													<li class="list-group-item">Cambio de Domicilio</li>
													<li class="list-group-item">Constancia Afiliacion</li>
													<li class="list-group-item">Duplicado de Credencial</li>
													<li class="list-group-item">Alta Familiar</li>
													<li class="list-group-item">Baja Afiliaciones</li>
													<li class="list-group-item">Cambio de Plan</li>
												</ul>
											</div>
										</a>
										<a
											class="list-group-item list-group-item-action"
											aria-current="true"
											data-bs-toggle="collapse"
											href="#collapseReintegros"
											role="button"
											aria-expanded="false"
											aria-controls="collapseReintegros"
										>
											Reintegros <FontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
											<div class="collapse" id="collapseReintegros">
												<ul class="list-group list-group-flush">
													<li class="list-group-item">Solicitud de Reintegros</li>
												</ul>
											</div>
										</a>
										<a
											class="list-group-item list-group-item-action"
											aria-current="true"
											data-bs-toggle="collapse"
											href="#collapseFacturacion"
											role="button"
											aria-expanded="false"
											aria-controls="collapseFacturacion"
										>
											Facturacion <FontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
											<div class="collapse" id="collapseFacturacion">
												<ul class="list-group list-group-flush">
													<li class="list-group-item">Consulta Facturacion</li>
													<li class="list-group-item">Pagar Cupon de Pago</li>
													<li class="list-group-item">Debito Automatico</li>
													<li class="list-group-item">Solicitudes, Consultas y Reclamos</li>
												</ul>
											</div>
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Coseguros
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Certificados | Formularios
										</a>
									</div>
								</div>
							</li>
							<li
								class="list-group-item"
								data-bs-toggle="collapse"
								href="#collapseSeguimiento"
								role="button"
								aria-expanded="false"
								aria-controls="collapseSeguimiento"
							>
								Seguimiento de Opciones <FontAwesomeIcon icon="fa-solid fa-arrow-down-short-wide" />
								<div class="collapse" id="collapseSeguimiento">
									<div class="list-group">
										<a href="#" class="list-group-item list-group-item-action" aria-current="true">
											Autorizaciones
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Afiliaciones
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Reintegros
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Certificados
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Facturacion
										</a>
										<a href="#" class="list-group-item list-group-item-action">
											Otros Tramites
										</a>
									</div>
								</div>
							</li>
							<li class="list-group-item">Cartilla Medica</li>
							<li class="list-group-item">Delegacion</li>
						</ul>
					</div>

					<div
						class="btn-group  position-absolute bottom-0 start-0 w-100"
						role="group"
						aria-label="Basic mixed styles example"
					>
						<button type="button" class="btn btn-success w-100">
							<FontAwesomeIcon icon="fa-solid fa-unlock-keyhole" />
						</button>
						<button type="button" class="btn btn-danger w-100">
							<FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeaderNavbar;
