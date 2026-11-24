[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Excel para la Conciliación Mensual de Costes y Valores de Obra (CVR) y Devengos — Herramienta de Previsión de WIP, Riesgo de Variaciones y EAC

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Microsoft Excel & Free Web Tool](https://img.shields.io/badge/Platform-Excel%20%7C%20Web%20Tool-217346.svg)
![Industry: Construction Cost Control](https://img.shields.io/badge/Industry-Construction%20%26%20QS-orange.svg)
![Category: CVR, WIP & Accruals](https://img.shields.io/badge/Tool-CVR%20%26%20Accruals-2251FF.svg)

**Una plantilla de Excel lista para usar de Conciliación Mensual de Costes y Valores de Obra (CVR) y devengos de obra, diseñada para equipos de proyecto, aparejadores y quantity surveyors (QS), y contratistas, para conciliar el valor certificado, los costes contabilizados en el mayor, los pasivos de obra no facturados, las órdenes de cambio en disputa y las previsiones de Estimación al Final (EAC) antes de que el retraso en las facturas genere informes de beneficios engañosos.**

> **Dos formas de usar este marco de control de costes de construcción:**
>
> - **Prueba la herramienta online gratuita en el navegador (sin registro, prueba instantánea):** [Lanza la calculadora web gratuita mensual de CVR y devengos](https://hyvoid.github.io/construction-cvr-accruals-excel-template/) para probar la lógica de conciliación en un escenario único directamente en tu navegador.
> - **Descarga el libro de Excel local completo y reutilizable (compra única · garantía de devolución de 30 días sin preguntas):** [Obtén la plantilla de Excel completa mensual de CVR y devengos de construcción en Theseus Workshop](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README) — preconstruida con fórmulas que se actualizan solas, almacenada 100% localmente en tu ordenador para una privacidad total de los datos financieros, sin cuotas recurrentes de suscripción SaaS.

---

## Lo que esta plantilla de Excel de CVR y devengos de construcción rastrea (mapa de punto de dolor a solución)

La contabilidad de construcción de fin de mes a menudo sobreestima el beneficio del proyecto porque el consumo en obra supera la facturación de los proveedores. La tabla siguiente relaciona los puntos de dolor habituales del control de costes de construcción directamente con lo que calcula este libro de trabajo y la acción comercial que desencadena.

| Punto de dolor del control de costes de construcción | Lo que esta plantilla de Excel de CVR rastrea y calcula | Resultado en la decisión comercial |
|---|---|---|
| **Beneficio contable inflado frente a beneficio real previsto (sobreestimación del WIP)** | Concilia el beneficio del mayor contable frente al **valor certificado, los costes devengados y el Coste Pendiente para Completar (CTC) restante** | Separa inmediatamente el margen real del proyecto del beneficio artificial causado por facturas de proveedores tardías y el registro optimista de ingresos |
| **Pasivos de obra no facturados omitidos (brecha de devengos de construcción)** | Captura **alquiler de maquinaria/equipo no facturado, horas de mano de obra en sitio, materiales en obra y diferencias de valoración de subcontratistas** antes de recibir la factura | Cierra la brecha entre el gasto de obra y las cuentas por pagar para que los informes de costes de fin de mes reflejen el pasivo operativo real |
| **Riesgo de ingresos por órdenes de cambio y variaciones sobreestimado** | Aplica **ponderaciones de confianza basadas en evidencia** a las órdenes de variación enviadas, en disputa y no aprobadas, en lugar de reconocer el 100% del valor de la reclamación | Evita que las reclamaciones no acordadas inflen artificialmente los ingresos del Work in Progress (WIP) y destaca las reclamaciones con documentación insuficiente |
| **Decaimiento oculto del margen en paquetes de subcontratas (margin drift)** | Rastrea el **margen objetivo comercial original frente al margen previsto actual** en cada oficio y paquete de subcontratación individual | Expone temprano los paquetes que sangran —antes de que los oficios rentables enmascaren pérdidas dentro de los totales resumidos a nivel de proyecto |
| **Proyecciones finales de coste a ciegas (Estimate at Completion / EAC)** | Consolida los **costes contabilizados hasta la fecha + devengos de obra + Coste Pendiente para Completar (CTC) restante** en una **previsión de EAC a nivel de paquete** | Da a la dirección una previsión defendible de la rentabilidad final del proyecto con meses de antelación a la finalización práctica |
| **Informes desconectados sin seguimiento comercial** | Marca automáticamente **variaciones no resueltas de alto valor y paquetes con margin drift en alerta roja** dentro de un registro de acciones | Convierte los informes mensuales de costes en órdenes comerciales concretas para la justificación de reclamaciones, congelaciones de compras o controles de pagos |


## Vista previa de la hoja de cálculo

¿Quieres echar un vistazo más de cerca antes de descargar? Puedes previsualizar la hoja de cálculo en Google Sheets para explorar su diseño, estructura y lógica de cálculo.

**[Ver la vista previa de la hoja de cálculo en Google Sheets](https://docs.google.com/spreadsheets/d/1pfwowsXch8fIxNKtaFR8Fk72LO1sItNC/edit?usp=sharing&ouid=108770714531989318327&rtpof=true&sd=true)**

> **Nota sobre compatibilidad:** La vista previa de Google Sheets puede mostrar ocasionalmente errores `#NAME?` o advertencias de fórmulas debido a diferencias de compatibilidad de fórmulas entre Google Sheets y Microsoft Excel. Estos son problemas de compatibilidad exclusivos de la vista previa y no afectan la funcionalidad del libro de Excel original. Para el comportamiento previsto de las fórmulas y la funcionalidad completa, descarga y abre el archivo `.xlsx` en Microsoft Excel.

---

## Para quién está construida esta plantilla de Excel de CVR de construcción: roles y casos de uso específicos por puesto

Ya sea que estés realizando tu primera revisión comercial mensual o estandarizando los informes entre múltiples paquetes de subcontratación activos, este libro de trabajo combina roles específicos de la industria con flujos de trabajo de Excel listos para usar:

- **Quantity surveyors (QS) junior y QS asistentes — *Plantilla de Excel de CVR para QS*:** Estandariza las conciliaciones mensuales de valoraciones provisionales, rastrea los valores certificados frente a los aplicados de los subcontratistas y construye dosieres de CVR defendibles sin escribir fórmulas complejas de hoja de cálculo desde cero.
- **Directores de proyecto de construcción (PM) — *Hoja de cálculo de control de costes de proyecto de construcción*:** Supervisa el Coste Pendiente para Completar (CTC) a nivel de paquete, los devengos de maquinaria/mano de obra no facturados y la erosión del margen en lenguaje sencillo sin esperar semanas al cierre contable de la central.
- **Gerentes comerciales y controladores de costes — *Herramienta de informes mensuales de CVR y margin drift*:** Impone fechas de corte de fin de mes consistentes entre los equipos de finanzas y de obra, descuenta sistemáticamente las reclamaciones de variación de alto riesgo y prioriza la intervención comercial en los paquetes marcados en rojo.
- **Contables y tenedores de libros de proyectos de construcción — *Rastreador de Excel de devengos de construcción y WIP*:** Puentea el desfase temporal entre las cuentas por pagar/mayor general contable y el progreso real de obra para producir asientos de devengos de fin de mes más limpios y calendarios de WIP.
- **Contratistas generales y constructores pequeños y medianos — *Alternativa de Excel offline al software ERP de construcción*:** Obtén control de costes estructurado a nivel de paquete en proyectos residenciales, de adaptación interior (fit-out), civiles, de fachada y MEP sin pagar miles al año por plataformas empresariales como Procore, Coins o CMiC.
- **Administradores de compras y de subcontratas — *Rastreador de exposición de paquetes de subcontratistas y control de pagos*:** Detecta temprano los paquetes con tendencia de sobrepresupuesto para desencadenar revisiones de compras, comprobaciones de cargos en retroceso (back-charge) y retenciones de certificados de pago.

---

## Escenarios reales de construcción: cuándo realizar una comprobación mensual de CVR, WIP y devengos

No necesitas un departamento contable empresarial para encontrarte con puntos ciegos comerciales. Esta plantilla de Excel lista para usar aborda directamente cuatro escenarios recurrentes en obra:

1. **Informes para la dirección a fin de mes bajo presión de tiempo:** Cuando la alta dirección pide el margen real del proyecto antes de que lleguen las facturas finales de los subcontratistas y necesitas un dosiere de conciliación mensual repetible en minutos.
2. **Trabajos con mucha subcontratación y multipaquete (MEP, civil, fit-out, fachada):** Cuando 10 a más de 50 paquetes de oficios se ejecutan simultáneamente y un solo subcontrato de bajo rendimiento amenaza con arrasar el beneficio total del trabajo.
3. **Proyectos con muchas variaciones o alcance en disputa:** Cuando las órdenes de cambio pendientes representan una gran parte de los ingresos proyectados y necesitas una regla objetiva para separar el derecho sustanciado del mero deseo.
4. **Transición fuera de hojas de cálculo ad hoc desconectadas:** Cuando un contratista en crecimiento supera el seguimiento manual de facturas y necesita un flujo de trabajo mensual de CVR fijo y resistente a errores que cualquier miembro del equipo pueda operar de inmediato.

---

## Flujo de inicio rápido: ejecuta un CVR mensual profesional en minutos

La conciliación comercial de costes y la contabilidad de devengos parecen complejas sobre el papel, y por eso muchos equipos pequeños evitan hacerlas hasta que el flujo de caja se rompe. **En este libro de Excel, todas las reglas de búsqueda de auto-emparejamiento, la lógica de ponderación de riesgo y las fórmulas dinámicas de consolidación ya están preconstruidas y se actualizan solas.** Ni siquiera necesitas hacer doble clic para arrastrar fórmulas hacia abajo: simplemente pega los datos de tu proyecto y lee los resultados de decisión.

### Paso 1: Prueba la lógica gratis online o configura tus parámetros mensuales de CVR
Empieza explorando el flujo de cálculo en la [herramienta web gratuita online de CVR y devengos de construcción](https://hyvoid.github.io/construction-cvr-accruals-excel-template/), o abre `00_Global Parameters` dentro del libro de Excel local. Configura tu **fecha de corte** mensual, el símbolo de moneda, los porcentajes de confianza de variaciones, los umbrales de advertencia de margin drift, los límites de alerta de devengos y los umbrales de seguimiento de reclamaciones. Como cada supuesto está centralizado, puedes ajustar las reglas de riesgo comercial en cualquier momento sin reconstruir una sola fórmula.

### Paso 2: Copia y pega tus datos de valoración, mayor y devengos de obra
Pega tu hoja de cálculo existente o las exportaciones contables directamente en las tres pestañas de entrada designadas:
- `01_Value & Variation Register` — valores originales del contrato por paquete, valoraciones provisionales certificadas y órdenes de cambio/variaciones pendientes con estado de evidencia.
- `02_Booked Cost Ledger` — transacciones de costes del mayor financiero/cuentas por pagar contabilizadas hasta la fecha de corte.
- `03_Site Accruals & CTC` — alquiler de equipo no facturado, mano de obra de sitio, diferencias de valoración de subcontratistas y Coste Pendiente para Completar (CTC) estimado.

### Paso 3: Revisa el CVR, EAC y margin drift automatizados a nivel de paquete
Abre `04_Package CVR Engine`. El libro de trabajo empareja automáticamente cada código de paquete en todas las hojas de entrada, consolida los ingresos ajustados por riesgo, los costes contabilizados, los devengos de obra y el CTC, y calcula la **Estimate at Completion (EAC), el beneficio previsto, el margen previsto %, el margin drift y el estado de riesgo del paquete** sin copiar una sola fórmula manualmente.

### Paso 4: Detecta fugas de beneficio y desencadena acciones de control comercial
- Abre `05_Profit Reality & Margin Drift Dashboard` para comparar el beneficio contable frente al beneficio real previsto y aislar de inmediato tus paquetes de oficios con peor rendimiento.
- Abre `06_Claims & Procurement Control Orders` para generar una lista de acciones priorizada de variaciones no resueltas de alto valor que necesitan justificación con evidencia y de paquetes en alerta roja que requieren controles de compras o de pagos.

### Paso 5: Consolida un flujo de trabajo mensual local reutilizable (actualízate desde la prueba de un solo uso)
La herramienta web gratuita está pensada para pruebas rápidas y puntuales. Cuando estés listo para ejecutar un control comercial mensual real en proyectos activos sin empezar de cero cada mes, pasa al libro de Excel local completo:

- **Claridad de decisión en 1 minuto para principiantes:** Copia y pega una vez tus datos brutos de obra y del mayor para obtener de inmediato un análisis comercial de nivel ejecutivo, dejándote detectar fugas de beneficio en 1 minuto y mantenerte concentrado en la entrega de construcción de alto valor en temporadas altas.
- **Simple, fijo y reutilizable localmente:** Convierte un quebradero de cabeza mensual de QS/contabilidad en un flujo de trabajo repetible de copiar y pegar en Excel guardado directamente en tu disco duro, para proyectos y periodos de informe ilimitados.
- **Compra única frente a costosas suscripciones SaaS:** Paga una vez, por una fracción del coste de suscripción mensual o anual recurrente que cobran los programas convencionales de software de control de costes de construcción.
- **100% de privacidad de datos offline:** Los márgenes sensibles del contratista, las tarifas de los subcontratistas y las valoraciones de reclamaciones en disputa permanecen estrictamente en tu dispositivo local, eliminando los riesgos de seguridad en la nube y de exposición de datos a terceros.
- **Evaluación sin riesgo:** Respaldada por una **garantía de devolución de 30 días sin preguntas**.

> **¿Listo para estandarizar tu control mensual de costes de proyecto?**
> [Descarga el libro de Excel completo mensual de CVR y devengos de construcción (compra única · garantía de devolución de 30 días)](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)

---

## La lógica de negocio y la metodología: exponer los puntos ciegos ocultos del beneficio en construcción

Muchos equipos de construcción —especialmente los no contables y los directores de proyecto primerizos— solo descubren que un trabajo pierde dinero en los últimos dos meses de construcción. Eso ocurre porque los informes financieros estándar contienen **tres puntos ciegos comerciales estructurales**:

1. **La ilusión del retraso de facturación (punto ciego del pasivo no facturado):** Los mayores contables solo registran costes después de que las facturas se aprueban y se introducen. En una obra activa, el alquiler de maquinaria, la mano de obra y el trabajo de los subcontratistas ocurren semanas antes de que lleguen las facturas. Depender únicamente de los costes contabilizados en el mayor hace que un paquete con pérdidas parezca rentable hasta que las facturas tardías arrasan las reservas de efectivo.
2. **La trampa de la reclamación al 100% (punto ciego optimista de variaciones):** Enviar una orden de cambio de $100,000 no significa que el cliente certificará $100,000. Contar las variaciones en disputa o no justificadas a su valor nominal completo infla los ingresos informados hoy y obliga a saneamientos repentinos en la liquidación de la cuenta final.
3. **El punto ciego del promedio de cartera:** Mirar solo el margen total del proyecto oculta el fallo a nivel de paquete. Un margen del +15% en hormigón estructural puede ocultar una explosión del -25% en subcontratación de MEP o fachada hasta que el trabajo ya está instalado y el apalancamiento comercial se ha perdido.

### Cómo los resuelve este libro de trabajo (marco de control comercial de 6 partes)

El modelo impone una regla comercial directa: **mide el beneficio del proyecto usando ingresos razonablemente sostenibles y el coste completo requerido para terminar todo el alcance —nunca solo las facturas procesadas hasta ahora.**

- **Alineación de la fecha de corte:** Fuerza que las certificaciones de ingresos, los costes del mayor y los devengos de obra caigan en una misma fecha de corte mensual común para que los desfases temporales no distorsionen el beneficio.
- **Valoración de variaciones ponderada por evidencia:** Descuenta las órdenes de cambio pendientes según su estado real de aprobación y evidencia, evitando que las reclamaciones inciertas inflen los ingresos previstos.
- **Reconocimiento de devengos de obra:** Incorpora de inmediato al informe mensual los pasivos de equipo, mano de obra y subcontratistas incurridos pero no facturados, alineando las cifras financieras con el progreso físico de obra.
- **Previsión de Estimate at Completion (EAC):** Combina los costes contabilizados incurridos, los devengos de obra y el Coste Pendiente para Completar (CTC) restante para proyectar el coste final del paquete mientras aún hay tiempo de intervenir.
- **Monitorización de margin drift a nivel de paquete:** Compara el margen previsto actual con el objetivo comercial original para cada paquete de oficios, exponiendo de inmediato el decaimiento del margen.
- **Registro de control de excepción a acción:** Filtra automáticamente las variaciones en disputa de alto valor y los paquetes con margin drift severo en tareas comerciales concretas —recopilación de evidencia, negociación de variaciones y congelaciones de compras/pagos.

---

## Comparativa de control de costes de construcción: informes tradicionales del mayor frente al flujo de trabajo de Excel de CVR a nivel de paquete

| Modo de fallo del control de costes de construcción | Informes tradicionales del mayor y de hoja de cálculo manual (alto riesgo de margin fade) | Flujo de trabajo automatizado de la plantilla mensual de Excel de CVR y devengos |
|---|---|---|
| **Retraso de facturas de AP y pasivos de obra no facturados** | La P&L de fin de mes sobreestima el beneficio bruto porque el alquiler de maquinaria consumido, la mano de obra por jornales y el trabajo de subcontratistas no han entrado en cuentas por pagar | El alquiler de maquinaria no facturado, la mano de obra y las diferencias de valoración de subcontratas se capturan sistemáticamente como **devengos mensuales de obra** |
| **Órdenes de cambio no acordadas y variaciones en disputa** | Las solicitudes de variación enviadas se contabilizan al 100% de su valor nominal, creando ingresos de WIP inflados y saneamientos repentinos en la cuenta final | Las variaciones pendientes se **ajustan por riesgo según la evidencia y el nivel de confianza**, revelando el ingreso recuperable frente a la exposición por reclamaciones |
| **Fechas de corte de finanzas y obra desalineadas** | Las solicitudes de valoración, los certificados de subcontratistas y los asientos del mayor abarcan periodos distintos, distorsionando el margen comercial mensual | Todos los ingresos, las transacciones del mayor y los devengos de obra se bloquean a una **única fecha de corte mensual** |
| **Ignorar el Coste Pendiente para Completar (CTC) restante** | Los equipos revisan los costes hundidos hasta la fecha sin cuantificar el efectivo aún requerido para terminar el alcance restante del paquete | El **EAC a nivel de paquete** combina los costes contabilizados, los devengos de obra y el CTC restante para prever el beneficio real al completar |
| **Enmascaramiento por total de proyecto del margin fade de paquetes** | Los totales de beneficio consolidado del proyecto ocultan sobrecostes severos dentro de paquetes individuales de MEP, civil o fit-out | El **seguimiento automatizado de margin drift a nivel de paquete** marca los oficios individuales que caen por debajo de los márgenes originales de licitación/objetivo |
| **Informes estáticos sin aplicación comercial** | Los informes de costes de fin de mes se quedan en carpetas mientras las reclamaciones vencidas pierden justificación y los subcontratistas con sobrepresupuesto siguen cobrando | Las reclamaciones de variación de alto riesgo y los paquetes en alerta roja llenan automáticamente las **órdenes de control de reclamaciones y compras** |

---

## Por qué construí este marco mensual de CVR y control de costes

Los proyectos de construcción rara vez fracasan de la noche a la mañana por un único número malo de licitación. Sangran beneficio en silencio porque las operaciones de obra, las valoraciones comerciales y la contabilidad financiera corren sobre tres relojes distintos.

Finanzas registra los costes cuando las facturas superan cuentas por pagar. Los equipos de obra queman equipo, mano de obra y horas de subcontrata semanas antes. Los equipos comerciales envían órdenes de cambio que permanecen en negociación durante meses. Cuando la dirección combina costes parciales del mayor con reclamaciones de variación no verificadas, el informe mensual muestra un beneficio saludable justo hasta que la cuenta final se derrumba.

Construí este libro de trabajo para convertir esa brecha de conciliación en un hábito mensual repetible. Al colocar lado a lado, a nivel de paquete de subcontrata, el ingreso certificado, las variaciones ajustadas por riesgo, los costes contabilizados del mayor, los devengos de obra no facturados y el Coste Pendiente para Completar, los equipos pueden ver cuándo un paquete "rentable" ya ha caído en pérdida —lo bastante temprano para apretar las compras, justificar reclamaciones y proteger el margen final sin reconstruir hojas de cálculo cada mes.

---

## Sobre Theseus Workshop — kits de herramientas de decisión en Excel ligeros y locales

Construyo rastreadores operativos prácticos almacenados localmente y kits de herramientas de Excel de apoyo a decisiones financieras para equipos de construcción, contratistas y operadores de negocio que lidian con demasiadas piezas en movimiento.

Cada kit se construye en torno a una pregunta: **¿Qué números necesitan estar en un solo lugar para que puedas tomar la siguiente decisión comercial con confianza en minutos?**

¿Buscas más libros de Excel listos para usar y de compra única para estimación de construcción, control de costes de proyecto, previsión de flujo de caja y gestión operativa —sin cuotas recurrentes de SaaS y con privacidad total offline?

- **[Explora todos los kits de herramientas de Excel de decisiones de construcción y negocio en Theseus Workshop (theseusworkshop.com)](https://theseusworkshop.com/)**
- **[Descarga el libro de Excel completo mensual de CVR y devengos de construcción](https://theseusworkshop.com/l/cnjyy?utm_source=github&utm_medium=GitHub%20README)**
- **[Ver la licencia Apache 2.0 del repositorio](LICENSE)**


## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

### Arquitectura del libro de trabajo

El libro de trabajo sigue una arquitectura de cuatro capas:

| Capa | Hoja | Responsabilidad |
|---|---|---|
| Control global | `00_Global Parameters` | Fecha de corte, moneda, factores de confianza de variaciones, umbrales de margin drift, umbrales de advertencia de devengos, umbral de seguimiento de reclamaciones y margen objetivo |
| Entradas de datos | `01_Value & Variation Register` | Línea base del paquete, valor certificado y datos de variaciones pendientes |
| Entradas de datos | `02_Booked Cost Ledger` | Registros del mayor de costes financieros |
| Entradas de datos | `03_Site Accruals & CTC` | Pasivos por devengos de obra y estimaciones de coste pendiente para completar |
| Motor de cálculo | `04_Package CVR Engine` | Conciliación de ingresos a nivel de paquete, agregación de costes, EAC, beneficio, margen, drift y estado |
| Salida de gestión | `05_Profit Reality & Margin Drift Dashboard` | Conciliación a nivel de proyecto, salud de devengos y ranking de excepciones |
| Salida de acciones | `06_Claims & Procurement Control Orders` | Seguimiento de reclamaciones e instrucciones de control de compras/pagos en alerta roja |

#### Flujo de datos

```text
                   GLOBAL PARAMETERS
             Cut-off / Risk / Thresholds
                          |
        +-----------------+-----------------+
        |                 |                 |
        v                 v                 v
  VALUE & VO         BOOKED COST       SITE ACCRUALS
  REGISTER            LEDGER              & CTC
        |                 |                 |
        +-----------------+-----------------+
                          |
                          v
                 PACKAGE CVR ENGINE
                          |
          +---------------+---------------+
          |                               |
          v                               v
   MANAGEMENT DASHBOARD           ACTION INSTRUCTION SHEETS
   Profit & Margin Drift          Claims / Procurement / Payment
```

#### Lógica de conciliación

El motor de cálculo utiliza los códigos de paquete como clave principal de agregación.

Para cada paquete, el modelo consolida:

1. Ingresos certificados válidos para la fecha de corte.
2. Ingresos de variaciones pendientes ajustados por riesgo.
3. Costes financieros contabilizados.
4. Pasivos por devengos de obra.
5. Coste pendiente para completar restante.

El EAC resultante se compara con la previsión de ingresos ajustada por riesgo para derivar el beneficio y el margen previstos a nivel de paquete.

### Tres trampas que atrapan incluso a los directores de construcción experimentados

#### Trampa 1 — Tratar los costes facturados como el coste total incurrido

**Decisión:** Un director de proyecto concluye que un paquete de subcontrata sigue siendo rentable porque el mayor contable muestra costes por debajo del presupuesto.

**El fallo oculto:** La mano de obra de sitio, el alquiler de equipo y el trabajo de subcontratas ya completado han ocurrido pero aún no se han facturado ni contabilizado.

**Ilustración:**

| | Importe |
|---|---:|
| Ingreso certificado e informado | 1,000,000 |
| Coste contabilizado | 700,000 |
| Beneficio aparente | 300,000 |
| Devengos de obra no facturados | 180,000 |
| Coste real incurrido | 880,000 |
| Beneficio incurrido corregido | 120,000 |

El beneficio aparente está sobreestimado en 180,000 incluso antes de considerar el trabajo restante.

El mayor financiero no está necesariamente equivocado. Está incompleto para la previsión de proyectos.

El enfoque corregido consiste en conciliar los costes del mayor con los pasivos operativos en una fecha de corte común. La rentabilidad debe evaluarse frente a los costes ya incurridos, no solo frente a las facturas ya procesadas.

<details>
<summary>Referencia de fórmulas — conciliación del coste incurrido</summary>

```excel
Booked Cost = SUMIFS(Valid_Booked_Cost, Package_Code)

Accruals = SUMIFS(Valid_Accruals, Package_Code)

Actual Incurred Cost = Booked Cost + Accruals
```

El libro de trabajo implementa esta agregación mediante salidas de matriz dinámica y lógica `SUMIFS` a nivel de paquete.

</details>

#### Trampa 2 — Tratar cada variación pendiente como totalmente recuperable

**Decisión:** Un proyecto informa el valor completo de las variaciones enviadas como ingreso.

**El fallo oculto:** La variación puede tener evidencia incompleta, precios sin resolver, derecho en disputa o ninguna instrucción formal.

Una reclamación enviada no equivale a un valor aprobado o recuperable.

| Estado de evidencia de la variación | Factor de confianza ilustrativo |
|---|---:|
| A — Evidencia completa / instrucción sólida | 85% |
| B — Negociación o evidencia de soporte parcial | 50% |
| C — En disputa o evidencia débil | 10% |

Estos son factores de evaluación configurables, no probabilidades de aprobación contractual ni normas contables.

Por ejemplo, una variación enviada de 200,000 evaluada en el Nivel B aporta 100,000 a la previsión de ingresos ajustada por riesgo bajo el modelo por defecto.

El enfoque corregido separa el importe enviado del importe ajustado por riesgo. Esto hace visible la incertidumbre y evita que una reclamación pendiente infle automáticamente el beneficio previsto.

<details>
<summary>Referencia de fórmulas — ajuste de riesgo de variaciones</summary>

```excel
Risk-Adjusted Variation =
Submitted Variation Amount
* Confidence Factor
```

El factor de confianza se asigna según el nivel de evidencia de la variación seleccionado.

</details>

#### Trampa 3 — Ignorar el coste pendiente para completar restante

**Decisión:** La dirección concluye que un paquete tiene una rentabilidad aceptable porque los costes incurridos hasta ahora están controlados.

**El fallo oculto:** El alcance restante puede requerir todavía un gasto significativo, y el coste incurrido actual no representa el coste final del paquete.

| | Importe |
|---|---:|
| Ingreso ajustado por riesgo | 1,000,000 |
| Coste contabilizado | 600,000 |
| Devengos | 100,000 |
| Coste incurrido | 700,000 |
| CTC restante | 250,000 |
| EAC previsto | 950,000 |
| Beneficio previsto | 50,000 |

El paquete tiene 300,000 de beneficio aparente cuando solo se deducen los costes contabilizados. Después de los devengos y el CTC, el beneficio previsto es de solo 50,000.

El enfoque corregido es prever el coste de completar todo el paquete. La decisión comercial debe basarse en el coste final esperado, no en el coste acumulado hasta la fecha.

<details>
<summary>Referencia de fórmulas — Estimate at Completion</summary>

```excel
EAC = Booked Cost + Accruals + CTC
```

</details>

### Escenario de ejemplo

Considera un paquete de subcontrata con la siguiente posición comercial en el corte mensual:

| Concepto | Importe |
|---|---:|
| Ingreso de línea base | 1,200,000 |
| Coste objetivo de línea base | 1,050,000 |
| Ingreso certificado | 850,000 |
| Variaciones pendientes | 200,000 |
| Nivel de evidencia de variación | B |
| Coste contabilizado | 720,000 |
| Equipo y mano de obra no facturados | 80,000 |
| Diferencia de valoración de subcontrata según QS | 40,000 |
| CTC restante | 260,000 |

#### Paso 1 — Establecer el margen de línea base

El margen objetivo original se basa en el valor del contrato de línea base y el coste objetivo.

El margen de línea base del paquete es del 12.5%.

#### Paso 2 — Ajustar por riesgo las variaciones pendientes

El importe de la variación pendiente de 200,000 se evalúa en el Nivel B.

Bajo el factor por defecto del 50%, el valor de la variación ajustado por riesgo es 100,000.

El ingreso previsto ajustado por riesgo es:

850,000 + 100,000 = 950,000

#### Paso 3 — Conciliar el coste incurrido

El coste contabilizado es 720,000.

Los devengos de obra incluyen:

- Equipo y mano de obra: 80,000
- Diferencia de valoración de subcontrata según QS: 40,000

El coste real incurrido es 840,000.

#### Paso 4 — Prever el coste de finalización

El CTC restante del paquete es 260,000.

El EAC es:

840,000 + 260,000 = 1,100,000

#### Paso 5 — Evaluar la rentabilidad prevista

| Métrica | Importe |
|---|---:|
| Ingreso ajustado por riesgo | 950,000 |
| EAC | 1,100,000 |
| Beneficio previsto | -150,000 |
| Margen previsto | -15.8% |
| Margen de línea base | 12.5% |
| Margin drift | -28.3 puntos porcentuales |

Se prevé que el paquete pierda 150,000 bajo los supuestos actuales.

El problema no es meramente que el paquete esté rindiendo por debajo. La combinación de la recuperación incompleta de variaciones y el coste previsto de finalización ha situado el paquete materialmente por debajo de su objetivo comercial original.

La respuesta adecuada es una revisión comercial, un seguimiento de la evidencia de reclamaciones y una intervención de control de costes, en lugar de seguir confiando en el margen presupuestario original.

### Referencia de fórmulas

Las fórmulas siguientes describen la lógica de cálculo del libro de trabajo. Los grupos de fórmulas se organizan por hoja de origen y capa de cálculo.


<details>
<summary>Referencia de fórmulas — hojas de entrada y cálculo</summary>

#### Hoja 00 — Parámetros globales

La hoja de parámetros globales contiene 11 parámetros, configurados en `C4:C14`.

| Celda | Parámetro | Por defecto |
|---|---|---:|
| C4 | Símbolo de moneda | Definido por el usuario |
| C5 | Fecha de corte | 2026-10-31 |
| C6 | Factor de reconocimiento financiero de variaciones | 100% |
| C7 | Factor de variación Nivel A | 85% |
| C8 | Factor de variación Nivel B | 50% |
| C9 | Factor de variación Nivel C | 10% |
| C10 | Umbral amarillo de margin drift | -3.0% |
| C11 | Umbral rojo de margin drift | -5.0% |
| C12 | Umbral de advertencia de devengos | 15.0% |
| C13 | Umbral de importe de seguimiento de reclamaciones | 100,000 |
| C14 | Margen bruto objetivo del proyecto | 12.0% |

Los valores de los parámetros son la fuente central de configuración del libro de trabajo.

#### Hoja 01 — Registro de valores y variaciones

##### Ingreso certificado válido para la fecha de corte

Celda inicial: `J5`

```excel
=IF(A5:A5000="", "", IF(G5:G5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

Solo se reconoce el valor certificado asociado a fechas anteriores o iguales al corte mensual.

##### Factor de confianza de variación

Celda inicial: `K5`

```excel
=IF(A5:A5000="", "", IF(I5:I5000="A", '00_Global Parameters'!$C$7, IF(I5:I5000="B", '00_Global Parameters'!$C$8, '00_Global Parameters'!$C$9)))
```

El factor de confianza se asigna según el nivel de evidencia de la variación.

##### Valor de variación ajustado por riesgo

Celda inicial: `L5`

```excel
=IF(A5:A5000="", "", H5:H5000 * K5#)
```

##### Variación pendiente reconocida financieramente

Celda inicial: `M5`

```excel
=IF(A5:A5000="", "", H5:H5000 * '00_Global Parameters'!$C$6)
```

Esta columna reproduce el tratamiento tradicional de reconocimiento completo bajo el factor financiero de variaciones configurado. Se utiliza como referencia comparativa, no como afirmación de conformidad con ninguna norma contable concreta.

#### Hoja 02 — Mayor de costes contabilizados

##### Clasificación por fecha de corte

Celda inicial: `G5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Coste contabilizado válido para la fecha de corte

Celda inicial: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, F5:F5000, 0))
```

El libro de trabajo filtra los costes usando la fecha real de ocurrencia del negocio, en lugar de basarse exclusivamente en la fecha de registro de la factura.

#### Hoja 03 — Devengos de obra y CTC

##### Clasificación de devengos por fecha de corte

Celda inicial: `H5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, "Included", "Excluded - Future Period"))
```

##### Devengos de obra válidos

Celda inicial: `I5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, D5:D5000 + E5:E5000 + F5:F5000, 0))
```

Los devengos incluyen:

- Alquiler de equipo no facturado.
- Horas de mano de obra sin liquidar.
- Diferencias de valoración de subcontratas aprobadas por el QS.

##### Coste pendiente para completar válido

Celda inicial: `J5`

```excel
=IF(A5:A5000="", "", IF(C5:C5000<='00_Global Parameters'!$C$5, G5:G5000, 0))
```

La estimación de CTC se toma del registro de evaluación actual asociado al corte.

#### Hoja 04 — Motor de CVR de paquetes

##### 1. Códigos de paquete únicos

Celda inicial: `A5`

```excel
=UNIQUE(TOCOL('01_Value & Variation Register'!A5:A5000, 1))
```

##### 2. Nombre del paquete

Celda inicial: `B5`

```excel
=XLOOKUP(A5#, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!B5:B5000, "")
```

##### 3. Margen objetivo de línea base

Celda inicial: `C5`

```excel
=LET(
    rev, SUMIFS('01_Value & Variation Register'!D5:D5000, '01_Value & Variation Register'!A5:A5000, A5#),
    cost, SUMIFS('01_Value & Variation Register'!E5:E5000, '01_Value & Variation Register'!A5:A5000, A5#),
    IF(rev=0, 0, (rev - cost) / rev)
)
```

##### 4. Ingreso informado financieramente

Celda inicial: `D5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!M5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

Esto reproduce la medida comparativa de ingreso basada en el valor certificado válido para el corte y el reconocimiento financiero de variaciones configurado.

##### 5. Ingreso CVR ajustado por riesgo

Celda inicial: `E5`

```excel
=SUMIFS('01_Value & Variation Register'!J5#, '01_Value & Variation Register'!A5:A5000, A5#)
+ SUMIFS('01_Value & Variation Register'!L5#, '01_Value & Variation Register'!A5:A5000, A5#)
```

##### 6. Coste contabilizado

Celda inicial: `F5`

```excel
=SUMIFS('02_Booked Cost Ledger'!H5#, '02_Booked Cost Ledger'!D5:D5000, A5#)
```

##### 7. Devengos

Celda inicial: `G5`

```excel
=SUMIFS('03_Site Accruals & CTC'!I5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 8. Coste real incurrido

Celda inicial: `H5`

```excel
=F5# + G5#
```

##### 9. Coste pendiente para completar

Celda inicial: `I5`

```excel
=SUMIFS('03_Site Accruals & CTC'!J5#, '03_Site Accruals & CTC'!B5:B5000, A5#)
```

##### 10. Estimate at Completion

Celda inicial: `J5`

```excel
=H5# + I5#
```

##### 11. Beneficio informado financieramente

Celda inicial: `K5`

```excel
=D5# - F5#
```

Este beneficio comparativo se basa únicamente en el ingreso reconocido financieramente y los costes contabilizados.

##### 12. Beneficio CVR previsto

Celda inicial: `L5`

```excel
=E5# - J5#
```

##### 13. Margen CVR previsto

Celda inicial: `M5`

```excel
=IF(E5#=0, 0, L5# / E5#)
```

##### 14. Margin drift

Celda inicial: `N5`

```excel
=M5# - C5#
```

El margin drift se expresa como una diferencia en puntos porcentuales entre el margen previsto y el margen objetivo original.

##### 15. Estado de control del paquete

Celda inicial: `O5`

```excel
=IF(N5#<='00_Global Parameters'!$C$11, "RED ALERT - FREEZE PROCUREMENT", IF(N5#<='00_Global Parameters'!$C$10, "YELLOW ALERT - MARGIN DECLINE", "NORMAL"))
```

El estado del paquete se rige por los umbrales configurados de margin drift rojo y amarillo.

</details>

<details>
<summary>Referencia de fórmulas — hojas de panel y acciones</summary>

#### Hoja 05 — Panel de realidad del beneficio y margin drift

##### 1. Beneficio total informado financieramente

Celda inicial: `C5`

```excel
=SUM('04_Package CVR Engine'!K5#)
```

##### 2. Beneficio CVR previsto total

Celda inicial: `C6`

```excel
=SUM('04_Package CVR Engine'!L5#)
```

##### 3. Diferencia de ajuste de beneficio

Celda inicial: `C7`

```excel
=C5-C6
```

Resumen de advertencia para la dirección en `D7`:

```excel
="Warning: Reported profit exceeds the CVR forecast by "&'00_Global Parameters'!$C$4&TEXT(C7,"#,##0.00")&", primarily due to incomplete accruals and variation recognition assumptions."
```

##### 4. Salud de devengos y diagnóstico de margen

Celda inicial: `C8`

```excel
=LET(
    accr_rate, SUM('04_Package CVR Engine'!G5#) / SUM('04_Package CVR Engine'!H5#),
    real_gpm, SUM('04_Package CVR Engine'!L5#) / SUM('04_Package CVR Engine'!E5#),
    accr_msg, IF(accr_rate>'00_Global Parameters'!$C$12, "【Accrual Warning: "&TEXT(accr_rate,"0.0%")&" exceeds threshold】", "【Accrual Health: "&TEXT(accr_rate,"0.0%")&"】"),
    gpm_msg, IF(real_gpm<'00_Global Parameters'!$C$14, "【Project margin below target: "&TEXT(real_gpm,"0.0%")&" < "&TEXT('00_Global Parameters'!$C$14,"0.0%")&"】", "【Project margin meets target: "&TEXT(real_gpm,"0.0%")&"】"),
    accr_msg & " | " & gpm_msg
)
```

Esta fórmula evalúa la ratio de devengos y el margen bruto previsto global frente a los umbrales configurados.

##### 5. Matriz de excepciones de margin drift

Celda inicial: `A12`

```excel
=SORT(
    FILTER(
        '04_Package CVR Engine'!A5:O5000,
        ('04_Package CVR Engine'!A5:A5000<>"")*
        ('04_Package CVR Engine'!O5:O5000<>"NORMAL"),
        "All packages are currently within control thresholds"
    ),
    14,
    1
)
```

Los paquetes con estado de control no normal se filtran y clasifican por margin drift.

#### Hoja 06 — Órdenes de control de reclamaciones y compras

##### 1. Lista de seguimiento de reclamaciones

Celda inicial: `A5`

```excel
=FILTER(
    CHOOSECOLS('01_Value & Variation Register'!A5:I5000, 1, 2, 8, 9),
    ('01_Value & Variation Register'!A5:A5000<>"")*
    ('01_Value & Variation Register'!H5:H5000>='00_Global Parameters'!$C$13)*
    ('01_Value & Variation Register'!I5:I5000<>"A"),
    "No claims meet the follow-up threshold"
)
```

La lista identifica las variaciones que cumplen el umbral de importe pero carecen de evidencia de Nivel A.

##### 2. Instrucción de acción de evidencia de reclamaciones

Celda inicial: `E5`

```excel
=LET(
    pkg_codes, INDEX(A5#, 0, 1),
    IF(pkg_codes="No claims meet the follow-up threshold", "No claim follow-up required",
        "【Claim Follow-up】Commercial/QS team to complete supporting site records, signed instructions, and evidence for package "&pkg_codes&" within the current reporting cycle. Submitted variation amount: "&'00_Global Parameters'!$C$4&TEXT(INDEX(A5#, 0, 3),"#,##0.00")&". Evidence level: "&INDEX(A5#, 0, 4)&". Do not treat the full amount as confirmed revenue until entitlement and valuation are supported."
    )
)
```

##### 3. Lista de control de compras en alerta roja

Celda inicial: `G5`

```excel
=FILTER(
    CHOOSECOLS('04_Package CVR Engine'!A5:O5000, 1, 2, 12, 14),
    ('04_Package CVR Engine'!A5:A5000<>"")*
    ('04_Package CVR Engine'!N5:N5000<='00_Global Parameters'!$C$11),
    "No package has reached the red alert threshold"
)
```

##### 4. Instrucción de control de compras y pagos

Celda inicial: `K5`

```excel
=LET(
    red_codes, INDEX(G5#, 0, 1),
    sub_name, XLOOKUP(red_codes, '01_Value & Variation Register'!A5:A5000, '01_Value & Variation Register'!C5:C5000, "Unknown Subcontractor"),
    IF(red_codes="No package has reached the red alert threshold", "Procurement and payment release remain subject to normal review",
        "【RED ALERT CONTROL】Freeze new procurement and equipment hire commitments for package "&red_codes&" (Subcontractor: "&sub_name&"). Review payment against verified valuation and approved obligations. Require a package cost review before releasing additional discretionary commitments."
    )
)
```

La salida de control es una recomendación de acción para la dirección. No es una determinación legal, una instrucción de suspensión contractual ni un sustituto de los procedimientos aprobados de compras y pagos.

</details>

### Reglas de validación

| Campo / área | Regla | Comportamiento ante errores |
|---|---|---|
| Código de paquete | Debe coincidir con el identificador de paquete usado en todo el libro de trabajo | Los códigos sin emparejar pueden no agregarse correctamente |
| Nombre del paquete | Debe mantenerse consistente con el código de paquete | Las descripciones duplicadas o inconsistentes pueden crear ambigüedad |
| Ingreso de línea base | Valor numérico | Los valores no numéricos impiden cálculos de margen correctos |
| Coste de línea base | Valor numérico | Los valores no numéricos impiden cálculos de margen correctos |
| Ingreso certificado | Valor numérico con una fecha de certificación válida | Las fechas o valores inválidos pueden excluirse o clasificarse mal |
| Fecha de certificación | Debe ser una fecha válida de Excel | El cálculo de corte puede fallar si se almacena como texto |
| Importe de variación | Valor numérico | Los importes con formato de texto pueden causar errores de cálculo |
| Nivel de variación | A, B o C | Las clasificaciones inválidas pueden causar asignaciones incorrectas del factor de confianza |
| Fecha de registro financiero | Fecha válida | Los formatos de fecha inválidos pueden alterar los registros de transacciones |
| Fecha real del negocio | Fecha válida | La clasificación de corte depende de este campo |
| Código de paquete en el mayor de costes | Debe corresponder a un código de paquete existente | El coste puede no agregarse al paquete previsto |
| Fecha de devengo | Fecha válida | La lógica de corte puede fallar si la fecha se almacena como texto |
| Devengo de equipo | Valor numérico | Los importes con formato de texto pueden causar errores de cálculo |
| Devengo de mano de obra | Valor numérico | Los importes con formato de texto pueden causar errores de cálculo |
| Diferencia de valoración QS | Valor numérico | Los importes con formato de texto pueden causar errores de cálculo |
| Estimación de CTC | Valor numérico | Los valores no numéricos pueden impedir el cálculo del EAC |
| Fecha de corte | Fecha válida en los parámetros globales | Todas las salidas de conciliación basadas en fechas dependen de esta fecha |
| Símbolo de moneda | Símbolo de texto configurado por el usuario | Los formatos numéricos pueden necesitar sincronización manual |
| Áreas de salida de matriz dinámica | Sin valores introducidos manualmente dentro de los rangos de derrame | Los rangos bloqueados pueden provocar `#SPILL!` |
| Modo de cálculo de Excel | Se recomienda cálculo automático | El modo manual puede dejar salidas desactualizadas |
| Factores de confianza de variaciones | Porcentajes numéricos configurados | Los cambios afectan al ingreso ajustado por riesgo |
| Umbrales de margin drift | Porcentajes numéricos configurados | Los cambios afectan a las alertas de paquetes y a la salida de compras |
| Umbral de reclamaciones | Importe numérico | Los cambios afectan al filtrado de seguimiento de reclamaciones |
| Margen objetivo | Porcentaje numérico | Los cambios afectan a la evaluación de salud a nivel de proyecto |

### Comprobación de integridad del libro de trabajo

La especificación de implementación incluye una revisión de validación cruzada de la arquitectura y el diccionario de datos.

| Validación | Esperado | Resultado |
|---|---:|---|
| Campos de entrada | 26 | Completamente mapeados |
| Campos de salida clave | 33 | Completamente mapeados |
| Referencias de parámetros globales | 11 | Mapeados a salidas de cálculo o presentación |
| Motor de CVR de paquetes | 15 columnas de salida | Completamente mapeado |
| Panel | 5 grupos de salida clave | Completamente mapeado |
| Hojas de acciones | 4 grupos de salida clave | Completamente mapeados |

La especificación de diseño informa la validación cruzada como completa. Es una revisión de mapeo a nivel de diseño, no una afirmación de que cada instancia desplegada del libro de trabajo se ha probado de forma independiente.

---


## Procedimiento operativo mensual

### Paso 1 — Actualizar el corte y los parámetros

Abre `00_Global Parameters`.

Actualiza la fecha de corte mensual y confirma el símbolo de moneda. Revisa los factores de confianza de variaciones y los umbrales de alerta si la política de control comercial ha cambiado.

### Paso 2 — Actualizar los registros de origen

Actualiza las siguientes hojas:

- `01_Value & Variation Register` — el QS actualiza el valor certificado, las variaciones pendientes y el nivel de evidencia.
- `02_Booked Cost Ledger` — finanzas importa las transacciones de costes pertinentes.
- `03_Site Accruals & CTC` — los equipos de obra y comerciales actualizan los pasivos no facturados y el coste restante de finalización.

### Paso 3 — Revisar la clasificación por fecha de corte

Comprueba las salidas de clasificación de corte en las hojas de costes contabilizados y de devengos.

Confirma que las transacciones posteriores al corte de informe están excluidas y que las fechas reales del negocio reflejan el periodo de informe correcto.

### Paso 4 — Revisar el motor de CVR de paquetes

Abre `04_Package CVR Engine`.

Comprueba la lista de paquetes, el coste incurrido, el EAC, el beneficio previsto, el margen previsto y el estado de margin drift.

### Paso 5 — Revisar las salidas de gestión

Abre `05_Profit Reality & Margin Drift Dashboard`.

Revisa la diferencia de conciliación, la salud de devengos, el margen previsto a nivel de proyecto y el ranking de excepciones.

### Paso 6 — Emitir acciones de seguimiento

Abre `06_Claims & Procurement Control Orders`.

Revisa la lista de seguimiento de reclamaciones y la lista de compras en alerta roja. Valida las acciones propuestas frente a los contratos, los registros de obra, las políticas de compras y los procedimientos de aprobación de pagos antes de emitir instrucciones formales.

---

## Mantenimiento de datos

### Añadir nuevas transacciones

Añade registros en las áreas de entrada designadas de las hojas 01, 02 y 03.

Pega valores en las áreas de entrada. No rellenes manualmente las columnas de cálculo.

### Añadir un nuevo paquete

Añade el código y el nombre del paquete en el Value & Variation Register.

El código de paquete se incorpora automáticamente al motor de CVR mediante la lista dinámica de paquetes únicos.

### Cambiar umbrales comerciales

Ajusta los valores de los parámetros globales.

El libro de trabajo recalcula el ajuste de variaciones, la clasificación de margin drift, las salidas del panel y las listas de acciones.

---

## Requisitos y limitaciones

- **Alcance del negocio:** Proyectos de construcción basados en paquetes con valoración por avance, subcontratación, acumulación de costes, gestión de variaciones y previsión de coste de finalización.
- **Nivel de agregación:** Conciliación a nivel de paquete.
- **Capacidad de fórmulas:** Los rangos de origen por defecto cubren hasta 5,000 filas. Los administradores pueden ampliar los rangos si es necesario.
- **Volumen de datos operativos recomendado:** La especificación de implementación recomienda mantener las tablas de transacciones individuales por debajo de 50,000 filas para la operación habitual, con expansión hasta 100,000 filas dependiendo del rendimiento del libro y de los ajustes de fórmulas.
- **Entorno de hoja de cálculo requerido:** Microsoft 365, Excel 2021, Excel 2024 o una versión compatible de WPS que soporte las funciones de matriz dinámica usadas en el libro.
- **Versiones no soportadas:** Excel 2016 y Excel 2019 o anteriores no están soportados por la implementación de matriz dinámica.
- **Colaboración:** Durante la conciliación mensual, evita la edición simultánea de las áreas de derrame dinámico. Se recomienda un flujo de trabajo controlado de editor único durante el cierre.
- **Juicio contable y contractual:** Los factores de riesgo son supuestos de gestión configurables. No sustituyen a la política contable, la evaluación del derecho contractual, la aprobación formal de variaciones ni el juicio profesional.
- **Control de compras y pagos:** Las instrucciones generadas de congelación o revisión son salidas de control de gestión. Las acciones formales deben revisarse frente a las obligaciones contractuales y la autoridad interna.

### Solución de problemas

#### Errores `#SPILL!`

Una matriz dinámica puede bloquearse por contenido existente o celdas combinadas.

1. Selecciona la celda que muestra `#SPILL!`.
2. Identifica el rango de derrame obstruido.
3. Limpia las celdas bloqueantes o elimina las celdas combinadas incompatibles.
4. Confirma que la salida se expande con normalidad.

#### Los datos de costes no se agregan

Comprueba:

- Si la fecha de la transacción cae después del corte.
- Si el código de paquete coincide con el registro.
- Si los importes o las fechas están almacenados como texto.
- Si el modo de cálculo de Excel está configurado en Automático.

#### Errores `#VALUE!` tras la importación

Las exportaciones contables externas pueden contener números o fechas con formato de texto.

Convierte los valores afectados a formatos numéricos/de fecha y usa flujos de trabajo de pegado de valores donde corresponda.

#### El símbolo de moneda no coincide

Cambiar el parámetro del símbolo de moneda no cambia necesariamente los atributos de formato numérico de cada celda de Excel.

Si el proyecto cambia de moneda, sincroniza los formatos de visualización numérica en las columnas monetarias pertinentes.

</details>

## Otras herramientas de esta serie

Explora otras herramientas ligeras de construcción y control de proyectos en los [repositorios de Theseus Workshop / HyVoid en GitHub](https://github.com/HyVoid).

- [Estimación de construcción](https://github.com/HyVoid/construction-estimating) — Estandariza la estimación de licitaciones de construcción y transforma las estimaciones completadas en bibliotecas de costes reutilizables.
- [Libro de trabajo de seguimiento de costes de estimación AIA para construcción](https://github.com/HyVoid/aia-construction-cost-tracker-excel) — Compara las estimaciones de construcción frente a los costes reales durante toda la entrega del proyecto usando formatos estándar AIA.
- [Excel de gestión de proyectos de construcción](https://github.com/HyVoid/construction-project-management-excel) — Integra presupuestos, órdenes de cambio, facturación por avance y flujo de caja en un único marco de control de proyectos de construcción.
- [Plantilla de BOQ residencial](https://github.com/HyVoid/residential-boq-template) — Estima costes de construcción residencial a partir de mediciones (takeoffs) y tarifas del BOQ mientras rastrea los presupuestos aprobados frente al gasto real.
- [Motor de BOQ de estimación de costes de túnel por perforación y voladura](https://github.com/HyVoid/tunnel-cost-estimator-boq-excel) — Estima la excavación de túneles por perforación y voladura, la perforación, la voladura, el sostenimiento, el equipo y la mano de obra en un coste de proyecto completo y un BOQ.
- [Cálculos de ejes DIN 743](https://github.com/HyVoid/DIN-743-Shaft-Calculations) — Aplica las normas de cálculo de ejes DIN 743 a las decisiones de diseño de ingeniería.

Diseñadas para apoyar la estimación, el seguimiento de costes, la gestión de proyectos y la toma de decisiones operativas sin requerir una implementación completa de software empresarial.

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**.

Consulta el archivo [LICENSE](LICENSE) para más detalles.
