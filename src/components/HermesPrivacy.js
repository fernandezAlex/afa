import React from "react";

const sectionStyle = { marginBottom: "2rem" };
const headingStyle = { color: "#111827", marginBottom: "0.75rem" };

function HermesPrivacy() {
	return (
		<main style={{ background: "#f8f9fa", minHeight: "100vh", color: "#374151" }}>
			<div className="container" style={{ maxWidth: "920px", paddingTop: "4rem", paddingBottom: "4rem" }}>
				<a href="/" style={{ color: "#495057", fontWeight: 600 }}>← Volver a AFA Creations</a>
				<header style={{ margin: "2rem 0 3rem" }}>
					<p style={{ textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, color: "#6b7280" }}>AFA Creations</p>
					<h1 style={{ color: "#111827", fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>Política de privacidad de Hermes VPS Alex</h1>
					<p>Última actualización: 8 de octubre de 2026</p>
				</header>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>1. Responsable y alcance</h2>
					<p>Esta política describe cómo la aplicación privada <strong>Hermes VPS Alex</strong>, administrada por Alex Fernández Arroyo mediante AFA Creations, trata datos de Google cuando su propietario autoriza expresamente el acceso. La aplicación se utiliza para automatizaciones personales y profesionales del propio titular de la cuenta.</p>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>2. Datos de Google utilizados</h2>
					<p>Según las funciones autorizadas, Hermes puede acceder a mensajes y metadatos de Gmail, calendario, archivos de Google Drive, documentos, hojas de cálculo y contactos. Cada acceso se limita a los permisos mostrados en la pantalla de consentimiento de Google y a la tarea solicitada por el usuario.</p>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>3. Finalidades</h2>
					<ul>
						<li>Buscar y revisar correos solicitados, incluidos recibos y facturas.</li>
						<li>Gestionar eventos, archivos, documentos y hojas cuando el usuario lo autoriza.</li>
						<li>Ejecutar automatizaciones personales configuradas por el titular.</li>
						<li>Detectar errores y evitar operaciones duplicadas o no confirmadas.</li>
					</ul>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>4. Uso limitado y no comercialización</h2>
					<p>Los datos obtenidos de las API de Google no se venden, no se utilizan para publicidad y no se comparten con terceros salvo cuando sea imprescindible para prestar una función expresamente solicitada por el usuario o exista una obligación legal. Su uso se ajusta a la Política de Datos de Usuario de los Servicios API de Google, incluidos sus requisitos de uso limitado.</p>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>5. Conservación y seguridad</h2>
					<p>Las credenciales OAuth se almacenan en infraestructura privada con acceso restringido. Solo se conserva la información necesaria para ejecutar, verificar y auditar las automatizaciones autorizadas. Los registros operativos evitan incluir credenciales y reducen al mínimo el contenido personal.</p>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>6. Revocación y eliminación</h2>
					<p>El usuario puede revocar el acceso desde la sección de seguridad de su Cuenta de Google. También puede solicitar la eliminación de credenciales y datos asociados escribiendo a <a href="mailto:alex.fernandez.arroyo@gmail.com">alex.fernandez.arroyo@gmail.com</a>. Al revocar el acceso, las funciones que dependen de Google dejan de operar.</p>
				</section>

				<section style={sectionStyle}>
					<h2 style={headingStyle}>7. Cambios y contacto</h2>
					<p>Esta política podrá actualizarse para reflejar cambios funcionales, normativos o de seguridad. Las consultas sobre privacidad pueden dirigirse a <a href="mailto:alex.fernandez.arroyo@gmail.com">alex.fernandez.arroyo@gmail.com</a>.</p>
				</section>
			</div>
		</main>
	);
}

export default HermesPrivacy;
