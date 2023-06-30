/**
 * ! NodeJS Basico
 * 
 * !1.1 Introducción a  Node
 * 
 *  Node.js es un entorno de ejecución de código JavaScript que se basa en el motor
    de JavaScript V8 de Google Chrome. A diferencia de la ejecución de JavaScript en
    un navegador web, Node.js permite ejecutar código JavaScript en el lado del
    servidor. Esto significa que puedes usar JavaScript para crear aplicaciones de
    servidor y realizar tareas del lado del servidor, como manipular archivos,
    interactuar con bases de datos y responder a solicitudes de clientes.
    Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa
    que puede manejar muchas solicitudes simultáneamente sin bloquear el flujo de
    ejecución. Esto lo hace ideal para aplicaciones de alto rendimiento y en tiempo
    real, como aplicaciones web, servicios de backend, APIs y microservicios.
    Además de su capacidad para ejecutar código JavaScript en el servidor, Node.js
    también cuenta con un administrador de paquetes llamado npm (Node Package
    Manager). npm te permite descargar, instalar y administrar fácilmente paquetes y
    módulos de JavaScript de código abierto que puedes utilizar en tus aplicaciones.
    En resumen, Node.js es una plataforma que permite ejecutar código JavaScript en
    el servidor, lo cual ha impulsado el desarrollo de aplicaciones web y servicios del
    lado del servidor de alto rendimiento y escalables.

 * !1.2 Características de Node

 * ?  1.2.1   JavaScript en el Servidor
    Node.js permite ejecutar código JavaScript en el servidor, lo que facilita el uso del
    mismo lenguaje en el frontend y el backend. Esto permite a los desarrolladores
    utilizar las mismas habilidades y compartir código entre la parte del cliente y la del
    servidor.
 * ? 1.2.2 Modelo de E/S sin bloqueo y basado en eventos
    Node.js utiliza un modelo de E/S sin bloqueo y basado en eventos, lo que significa que puede manejar
    múltiples solicitudes concurrentemente sin bloquear el flujo de ejecución. Esto lo
    hace muy eficiente en términos de rendimiento y escalabilidad, lo que resulta en
    aplicaciones rápidas y con capacidad de respuesta.
 * ? 1.2.3 Arquitectura Orientada a módulos
    Node.js utiliza el sistema de módulos de
    CommonJS, lo que facilita la reutilización de código y la creación de aplicaciones
    modularizadas. Esto permite a los desarrolladores separar el código en módulos yutilizar paquetes de terceros fácilmente a través del administrador de paquetes
    npm.
 * ? 1.2.4 Amplia comunidad y ecosistema 
    Node.js cuenta con una gran comunidad de
    desarrolladores y un ecosistema vibrante. Hay una amplia gama de bibliotecas,
    frameworks y herramientas disponibles en el registro de paquetes npm, lo que
    facilita el desarrollo rápido de aplicaciones y la integración con otros sistemas.

 * ? 1.2.5 Escabilidad
    Node.js es conocido por su capacidad para manejar grandes
    cantidades de solicitudes concurrentes con eficiencia. Gracias a su modelo sin
    bloqueo y su enfoque en la escalabilidad, es ampliamente utilizado para
    desarrollar aplicaciones en tiempo real, como chats en línea, juegos multijugador y
    sistemas de streaming.
 * ? 1.2.6 Orientado a Eventos
    Node.js se basa en un patrón de programación
    orientado a eventos, lo que significa que las operaciones se desencadenan en
    respuesta a eventos específicos. Esto hace que Node.js sea adecuado para el
    desarrollo de aplicaciones en tiempo real y de transmisión de datos, donde se
    requiere una actualización constante y una respuesta rápida a los eventos.
    Estas son solo algunas de las características clave de Node.js que han contribuido
    a su popularidad y adopción en el desarrollo web y de aplicaciones del lado del servidor.

 * ! 1.3 Como funciona Node
    Node.js se basa en una arquitectura de tiempo de ejecución de JavaScript basada
    en eventos y utiliza un solo subproceso (thread) principal para ejecutar el código
    JavaScript. Aquí está el proceso general de cómo funciona Node.js:

 * ? 1.3.1 Inicialización 
    Cuando se inicia una aplicación Node.js, se realiza una
    inicialización del entorno de ejecución. Se cargan los módulos necesarios, se
    establecen las variables de entorno y se configuran los parámetros de ejecución
 * ? 1.3.2 Event Loop y manejo de eventos
    Node.js utiliza un bucle de eventos (event
    loop) para manejar las solicitudes y las operaciones de E/S de manera
    asincrónica. El bucle de eventos es responsable de recibir y distribuir eventos en
    el programa. Node.js espera continuamente eventos y ejecuta las devoluciones de
    llamada asociadas a medida que ocurren.
 * ? 1.3.3 Gestión de solicitud
    Cuando llega una solicitud al servidor Node.js, se
    desencadena un evento. El servidor registra una devolución de llamada (callback)
    para manejar la solicitud y continúa con otras tareas mientras la solicitud se
    procesa en segundo plano.
 * ? 1.3.4 Operaciones de E/S no bloqueantes
    Node.js utiliza operaciones de E/S no
    bloqueantes, lo que significa que puede iniciar una operación de E/S (como leer oescribir en un archivo, hacer una solicitud a una base de datos o enviar una
    solicitud HTTP) y continuar con otras tareas sin esperar a que se complete la
    operación. Una vez que la operación de E/S se completa, se invoca la devolución
    de llamada correspondiente y se maneja la respuesta.
 * ? 1.3.5 Devoluciones de llamada (callbacks)
    Las devoluciones de llamada son
    funciones que se registran para ejecutarse después de que se complete una
    operación asincrónica. Las devoluciones de llamada se ejecutan cuando se
    produce un evento o cuando se completa una operación de E/S. Esto permite que
    Node.js maneje múltiples solicitudes y operaciones de manera eficiente y no
    bloqueante.
 * ? 1.3.6 Módulos y Npm
    Node.js utiliza un sistema de módulos basado en
    CommonJS, lo que permite la modularidad y la reutilización de código. Los
    módulos se cargan bajo demanda y se pueden utilizar para organizar el código en
    diferentes archivos y directorios. npm (Node Package Manager) es un
    administrador de paquetes utilizado en Node.js que facilita la instalación,
    actualización y administración de bibliotecas y módulos de terceros.

    En resumen, Node.js funciona mediante el uso de un bucle de eventos,
    operaciones de E/S no bloqueantes y devoluciones de llamada. Esto permite que
    Node.js maneje múltiples solicitudes y operaciones de manera eficiente, lo que lo
    hace adecuado para aplicaciones en tiempo real y de alta concurrencia.
    




 */