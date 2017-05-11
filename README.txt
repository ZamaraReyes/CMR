Ejercicio 1:

    Crea un projecto angular con una app con nombre 'CRM' y un controlador que llamaremos MainController.

    Crea en la vista un contenedor dónde vamos a representar a usuarios, por lo tanto ponle:
        Una imagen
        Un h2 para imprimir su nombre
        un fila que ponga "Edad: XX"
        un fila que ponga "Correo: XX"

    Ahora vamos a crear en nuestro scope y desde nuestro controlador un array con 4 usuarios que son estos de aquí:

    {
        name : 'Gina Miller',
        email : 'gina.miller44@example.com',
        photo : 'https://randomuser.me/api/portraits/women/4.jpg',
        age : 23
    },
    {
        name : 'Marlene Barnett',
        email : 'gina.miller44@example.com',
        photo : 'https://randomuser.me/api/portraits/women/43.jpg',
        age : 24
    },
    {
        name : 'Erika Fields',
        email : 'erika.fields94@example.com',
        photo : 'https://randomuser.me/api/portraits/women/6.jpg',
        age : 25
    },
    {
        name : 'Abigail Sanchez',
        email : 'abigail.sanchez87@example.com',
        photo : 'https://randomuser.me/api/portraits/women/29.jpg',
        age : 25
    }

    Ahora, modifica el index.html para que se rendericen todos en la pantalla usando ng-repeat