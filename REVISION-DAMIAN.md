# Revisión de cambios en la web — para Damián

Este documento te lleva directo a los cambios que se aplicaron a partir
del PDF corporativo actualizado. Cada punto incluye:

- **Antes / Después** del cambio
- **Link directo** a la sección (te lleva con scroll automático)
- **Tu decisión:** marcá una opción (`OK`, `Quitar`, `Cambiar a: ...`)

Devolvele este archivo a Franco con tus respuestas. Si alguna decisión
es "Quitar", el cambio se revierte con un solo comando de git — no se
pierde nada del resto.

---

## Cómo abrir la web

URL de revisión: **https://wikatec.vercel.app/**

Los links de cada cambio te llevan con scroll automático a la sección
correspondiente.

---

## 1. Subtítulo del Hero (slide 1)

**Antes:** "Para ciudades inteligentes"
**Después:** "Iluminación inteligente para sitios inteligentes"

🔗 [https://wikatec.vercel.app/](https://wikatec.vercel.app/) — primer slide del carrusel, abajo del título "Smart Lights".

**Origen:** PDF pág. 1 (portada).

**Tu decisión:**
- [ ] OK — dejarlo como está ahora
- [ ] Volver al texto anterior ("Para ciudades inteligentes")
- [ ] Cambiarlo a: _________________________________________

---

## 2. Texto de "¿Quiénes somos?"

**Antes:** "En Kiwatec desarrollamos soluciones de iluminación inteligente
para municipios, parques industriales, predios privados y todo tipo de
infraestructura. Acompañamos cada etapa: desde la instalación hasta la
gestión diaria, con el objetivo de reducir costos operativos, automatizar
el mantenimiento y construir entornos más seguros, eficientes y sostenibles."

**Después:** "En Kiwatec desarrollamos una plataforma para el control de
iluminación inteligente, abierta y escalable, que se adapta a cada
entorno urbano. Combinamos software avanzado y hardware de alto
rendimiento para optimizar recursos y gestionar infraestructura lumínica
de forma eficiente."

🔗 [https://wikatec.vercel.app/#quienes-somos](https://wikatec.vercel.app/#quienes-somos)

**Origen:** PDF pág. 2.

**Tu decisión:**
- [ ] OK — dejar el texto del PDF
- [ ] Volver al texto anterior (más comercial / orientado a clientes)
- [ ] Cambiarlo a: _________________________________________

---

## 3. Sección nueva: "Los 3 problemas principales del alumbrado tradicional"

Sección **completamente nueva**. Tres tarjetas con los problemas que
resuelve Smart Lights: luz encendida de día, luminarias quemadas, tecnología obsoleta.

🔗 [https://wikatec.vercel.app/beneficios#problemas-alumbrado-tradicional](https://wikatec.vercel.app/beneficios#problemas-alumbrado-tradicional)

**Origen:** PDF pág. 6.

**Decisiones a tomar:**

a) ¿Sumamos esta sección?
- [ ] Sí, dejarla donde está (página Beneficios, antes del carrusel actual)
- [ ] Sí, pero moverla a Inicio (home)
- [ ] Sí, pero moverla a Soluciones
- [ ] No, quitarla

b) Si la dejás, ¿algún cambio de copy?
- [ ] OK como está
- [ ] Cambios: _________________________________________

---

## 4. Sección nueva: "10 razones para elegir Kiwatec Smart Lights"

Sección **completamente nueva**. Diez tarjetas con las razones para
elegir el sistema (ahorro energético, modernización, gestión centralizada,
seguridad urbana, etc.).

🔗 [https://wikatec.vercel.app/beneficios#razones-smart-lights](https://wikatec.vercel.app/beneficios#razones-smart-lights)

**Origen:** PDF págs. 3, 4 y 5.

**Decisiones a tomar:**

a) ¿Cómo querés que aparezcan las 10 razones?
- [ ] Como están ahora: nueva sección en página Beneficios, debajo del carrusel
- [ ] Reemplazando el carrusel actual de 4 tarjetas (Ciudades / Ciudadanos / Operadores / Medio ambiente)
- [ ] Como sección independiente con su propia entrada en el menú/landing
- [ ] No sumarlas

b) Texto de la razón #10 ("Adaptabilidad a eventos"):
El PDF tenía un error de copy-paste en esta razón (repetía el texto de
"Reducción de huella de carbono"). La diseñadora ya está enterada.
Mientras tanto, escribimos un texto coherente con el título.

- [ ] OK el texto provisorio
- [ ] Cambiarlo a: _________________________________________

---

## 5. Sección nueva en /contacto: contactos comerciales nominales

Sección **completamente nueva** con tus datos y los de Jesica:
- Damián Menke — Director Comercial — dmenke@kiwatec.net — +54911-6500-6000
- Jesica Kovalsky — Gerente Comercial — jesica@kiwatec.net — +54911-2182-1624

🔗 [https://wikatec.vercel.app/contacto#contacto-equipo-comercial](https://wikatec.vercel.app/contacto#contacto-equipo-comercial)

**Origen:** PDF pág. 12.

> Nota: el **footer** del sitio sigue con el contacto genérico de
> siempre (`info@kiwatec.net` + tel +54911-6500-6000). Esta sección solo
> aparece dentro de la página `/contacto`.

**Decisiones a tomar:**
- [ ] OK como está (solo en /contacto)
- [ ] Sumar también al footer
- [ ] Mover al footer y quitar de /contacto
- [ ] No sumar — quitar todo

---

## Anexo: cambios del PDF que NO se aplicaron

Esto se decidió previamente con Franco. Quedan documentados para que los
tengas presentes:

- **Portfolio de soluciones / Ki Hub** (PDF pág. 9): no se incorpora.
  Forma parte de la presentación corporativa pero no era contenido para
  la web.
- **Iluminación Dinámica e Inteligente / Gestión lumínica adaptativa**
  (PDF pág. 11): no se incorpora, mismo motivo.

Si querés revisar esa decisión y sumar alguna de las dos al sitio,
avisanos.

---

## Otros cambios técnicos ya aplicados (no necesitan tu OK)

- **Fuente unificada:** todo el sitio ahora usa Montserrat (antes había
  mezcla con Raleway).
- **Nombre del controlador 4G:** se renombró de `CT-220C` a `KCT-220C`
  para que coincida con el PDF. Visible en [https://wikatec.vercel.app/hardware](https://wikatec.vercel.app/hardware).
- **Imagen de Turismo y Deporte:** pendiente — Franco le pidió a la
  diseñadora la nueva imagen (`05.png`). Una vez que llegue se reemplaza.

---

## Cómo revertir una decisión si decís "Quitar"

Por cada sección hay un commit independiente. Si decidís quitar algo,
Franco corre `git revert <hash>` y queda como estaba antes. Los cambios
de las otras secciones no se ven afectados.

| Cambio | Commit |
|---|---|
| 1. Subtítulo Hero | `d159b3c` |
| 2. ¿Quiénes somos? | `d9257bb` |
| 3. 3 problemas del alumbrado | `464132f` |
| 4. 10 razones Smart Lights | `752dd8f` |
| 5. Contactos en /contacto | `0df459f` |
