# AGENTS.md

Instrucciones para los agentes (Cursor y otros) que trabajen en este repositorio. Léelas antes de tocar nada y síguelas en cada tarea.

## Objetivo del repositorio

Este repositorio es el **dashboard personal** (Astro) de F. Javier Hernández con accesos a los materiales de FP Informática. Sitio: <https://fjavier-hernandez.github.io/>. No es un sitio MkDocs: los apuntes viven en otros repositorios (ral, aso, cloud, etc.).

El repositorio es **público**. Cada push a `main` despliega con GitHub Actions.

## Normas comunes de trabajo

Estas normas son iguales en todos los repositorios del profesor y prevalecen sobre cualquier instrucción contraria del resto del archivo. Las cláusulas marcadas con «cuando proceda» solo se aplican si el repositorio tiene esa herramienta o ese tipo de contenido; por ejemplo, las referencias a MkDocs, a los resultados de aprendizaje o a Aules no obligan a un sitio que no los utilice.

### Antes de empezar: planificar y optimizar

Antes de proponer o ejecutar cualquier tarea, el agente revisa cómo hacerla de la forma más eficiente, con menos uso, menos pasos y una organización más clara, y propone esa forma antes de empezar. Si la tarea se ha marcado como urgente, se ejecuta directamente y la mejora se propone después. El trabajo se organiza por fases con confirmación explícita: primero un análisis sin ediciones, que devuelve una matriz por archivo con citas, y después la ejecución de lo aprobado, sin un único encargo que pretenda hacerlo todo. Antes de generar contenido se leen el documento modelo y las normas del repositorio, porque sin un modelo delante el formato tiende a inventarse.

### Cómo se formulan los encargos

Cada encargo nuevo o complejo se plantea como un prompt estructurado, con el contexto, las restricciones y el formato de salida esperado, mientras que las iteraciones sobre un trabajo ya en marcha en el mismo hilo se formulan en lenguaje natural, apoyándose en el contexto existente. Esta pauta evita que el agente se desvíe del objetivo. Si un dato no está en las fuentes, el agente pregunta en lugar de inventarlo, y no convierte una propuesta suya en una decisión del profesor sin su confirmación expresa. Tampoco se fía de sus propios informes de progreso: comprueba el resultado sobre los archivos reales y, si un trabajo se interrumpe, inventaría lo hecho y retoma solo lo que falta.

### Redacción

Todo texto nuevo es prosa conceptual y cohesionada, con párrafos completos y conectores que expliquen el porqué y enlacen una idea con la siguiente. Se prohíbe el estilo telegráfico, es decir, las listas de fragmentos, las frases sin verbo y el formato «X: Y», y cada concepto se presenta explicando qué es, para qué sirve y cómo encaja antes de entrar en detalles. Cada párrafo tiene entre cinco y siete líneas como máximo, y si se alarga se divide por ideas. Las listas y las tablas solo se usan para elementos realmente enumerables y siempre después de un párrafo que defina el concepto.

El texto se escribe en castellano, con tono profesional y en la voz del profesor dirigida al alumnado o al público del sitio. No se admiten coloquialismos, muletillas ni expresiones de sabor artificial como «es importante destacar», «cabe mencionar» o «vamos a explorar», ni notas internas para el profesor, rutas de trabajo, fases o nombres de prompts en el contenido publicado. Las siglas se desarrollan la primera vez que aparecen en cada página o tema, y lo ya explicado en otra página se enlaza en lugar de repetirse. Cuando proceda, las admoniciones y los bloques de código se usan con mesura y con el lenguaje indicado. Corregir la redacción no autoriza a cambiar el contenido técnico, los códigos de actividades, los criterios ni las rúbricas.

### Materiales didácticos y comprobaciones

Cuando proceda en materiales docentes, la base son los apuntes del curso anterior y el Tema 3 de RAL es la referencia aprobada de redacción. El contenido CCNA que no pertenezca al currículo se identifica como nota opcional, sin convertirlo en obligatorio. Las actividades de clase (AC) y las prácticas (PR) se mantienen diferenciadas, sin fusionarlas, y no se añaden días de la semana a los materiales. Los temas aún no publicados se mantienen en `exclude_docs` hasta incorporarlos a la navegación, cuando se utilice MkDocs.

La revisión comprueba en los archivos la ausencia de las frases prohibidas y, cuando proceda, utiliza `mkdocs serve` para revisar la URL concreta del tema. Se procura resolver la generación con un encargo completo y, como máximo, una corrección acotada; si hace falta más trabajo, se explica el motivo y se acuerda el siguiente paso. Estas reglas docentes solo se aplican al tipo de contenido correspondiente y no convierten la web personal ni el seminario en módulos evaluables.

### Imágenes, fuentes y licencias

Las capturas que se leen mal, por estar borrosas, ser pequeñas o mostrar datos que no deben verse, se rehacen como diagramas SVG propios, y los SVG existentes no se quitan ni se sustituyen sin motivo. Toda imagen lleva un texto alternativo descriptivo, y las fotos reales llevan el crédito de autor, fuente y licencia. No se suben imágenes ni materiales sin licencia de uso, no se inventan direcciones web y no se enlazan sitios de respuestas o volcados de exámenes. El contenido libre se integra en los propios materiales en lugar de remitir a lecturas paralelas.

### Datos personales y privacidad

El repositorio es público y todo lo que se sube puede leerlo cualquiera, aunque no aparezca en la web. Nunca se escriben ni se suben nombres, notas, listas u otros datos del alumnado o de sus familias, DNI, NIA, direcciones, correos o teléfonos personales, firmas o documentos firmados, datos de asistencia o evaluación, datos de contacto de personas de empresas, rutas locales del ordenador del profesor, credenciales, tokens ni claves. Tampoco se publican horarios internos del profesorado ni de los grupos. Solo se admite la excepción de contacto público expresamente declarada en el apartado específico del sitio. Si una tarea necesita alguno de estos datos, se trabaja fuera del repositorio, y si se encuentra uno ya subido, se señala en la descripción de la pull request en lugar de dejarlo pasar.

Se retiran de los repositorios los horarios internos y cualquier imagen o archivo que no deba ser público. Las decisiones y los procedimientos se guardan en Obsidian, no en los repos. La programación de aula pública, es decir, las sesiones asignadas a cada fecha, se mantiene intacta como material de aula. Si hay dudas sobre el carácter interno o público de un dato, no se borra: se consulta antes de actuar.

### Limpiezas de datos

Los repositorios públicos contienen solo material de apuntes para el alumnado o el profesorado, no bitácoras ni registros de gestión interna. Las decisiones y los procedimientos de gestión interna, junto con el estado del trabajo, se conservan siempre en Obsidian antes de retirar nada, y nunca se escriben en el repositorio. Esta norma no afecta a las explicaciones, los procedimientos didácticos ni la documentación técnica legítima de los apuntes, que se mantienen. La limpieza distingue entre lo privado, que se retira, y la programación de aula pública (las sesiones asignadas a cada fecha), que se conserva tal cual; esta excepción no abarca otros calendarios. Ninguna retirada se ejecuta sin una autorización expresa para esa tarea concreta, y cada una se hace en su propia rama y pull request, separada de los cambios de contenido.

### Soluciones y evaluación

Las soluciones de exámenes no se publican en ningún repositorio. Las soluciones de Autocheck se publican en todos los módulos. Las claves y soluciones de exámenes y pruebas objetivas tampoco se publican en la web. Las soluciones de prácticas y retos se mantienen fuera del contenido público hasta que cierre la entrega correspondiente y el profesor autorice su publicación. La regla de espera no se aplica a las soluciones de Autocheck, también en Cloud y RAL. Un bloque desplegable no oculta ni protege una solución, porque su contenido forma parte de la página. Cuando proceda en un sitio MkDocs, todo archivo de `docs/` se publica aunque no esté en la navegación, de modo que lo que no deba verse debe quedar en `exclude_docs` o fuera de `docs/`. Excluir de la web no vuelve privado un archivo versionado en un repositorio público: las soluciones que deban permanecer privadas se guardan fuera del repositorio público. Si se detecta una solución publicada indebidamente, se señala en la pull request y no se mueve ningún archivo sin autorización expresa.

Cuando proceda en módulos de formación profesional, la evaluación es competencial y toma como referentes los resultados de aprendizaje (RA), con la nota calculada por RA según los pesos de la programación didáctica (PD). Los criterios de evaluación (CE) se tratan según lo que fije la PD del módulo, no se usa la palabra «criterial», y los RA y los CE se copian literalmente de la normativa, sin inventarlos ni renombrarlos.

### Git, revisión y publicación

Se trabaja siempre en una rama nueva con nombre descriptivo creada desde `main`, que contiene las fuentes, y nunca en una rama que solo guarde la web generada. No se hace push directo a `main`. Los commits son selectivos: se añaden los archivos concretos y se revisan los que no están versionados, sin usar nunca `git add -A`. Al terminar se abre una pull request con un resumen claro de qué cambia y por qué, después de comprobar que el diff no contiene datos personales ni soluciones que no deban publicarse.

Antes de abrir la pull request se ejecuta la comprobación del sitio, que es `mkdocs build --strict` sin avisos cuando proceda en MkDocs o `npm run build` cuando proceda en Astro, y se revisa el resultado en local. Ninguna pull request se fusiona ni se despliega sin la autorización explícita del profesor, porque fusionar en `main` puede publicar la web automáticamente. La única excepción es el repositorio del seminario, donde el revisor designado puede fusionar tras su propia revisión. No se ejecutan `deploy.sh` ni `mkdocs gh-deploy` salvo petición expresa, y los documentos Word o PDF solo se generan con una herramienta explícita, como Pandoc, nunca editándolos a mano.

## Estructura

| Ruta | Contenido |
| --- | --- |
| `src/pages/` | Páginas (`/` y `/about`) |
| `src/components/`, `src/layouts/` | Componentes y layout |
| `src/data/courses.json` | Enlaces a cursos |
| `public/` | Estáticos |
| `archive/` | Restos del sitio Jekyll anterior (referencia) |
| `.github/workflows/` | Deploy a GitHub Pages |

## Compilar en local

Node.js ≥ 20.19 (ver `.nvmrc`):

```bash
npm install
npm run build
npm run preview
```

## Específico de este repositorio

El stack es **Astro**, con estética terminal/matrix. Los cursos publicados son enlaces a otros repositorios y los apuntes no se duplican aquí. La configuración de Pages usa GitHub Actions como origen, y desde este repositorio no se tocan los repositorios MkDocs.

El correo de contacto público del profesor puede aparecer. Es la única excepción de contacto público declarada en este apartado, y no se añaden otros datos personales.
