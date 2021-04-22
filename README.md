# Getting Started with Hook 

Anotaciones React Hook 
1- para crear la app npx creat-react-app [nombre de la App]


2- UseState
En el ejemplo para los contadores, hacemos uso del useState
pero como estado inicial tenemos un objeto, con dos contadores,
contador1, contador2. 
extraemos este objeto en lo que vamos a utilizar,
creamos una constante que me traiga contador1 y contador2
del state, mediante desectructuracion

luego en el button al hacer onclick como usamos el setState
y dentro tiene dos objetos para no ser reiterativos DRY
(DO NOT REPEAT YOURSELF) utilizamos el operador spread ...
y extraemos todos los valores del state, pero a lo ultimo sobreescribimos el que queremos contador1 en el primer ej

3- Custom Hook - Counter
Creamos un custom hook que no es mas que una funcion anonima, con rafc podemos construilo facilmente
creamos las funciones y devolvemos lo que queremos 
desde counterwithcustomhook importamos este hook y con desectructuracion extraemos todo lo que necesitamos
para usarlo en los botones