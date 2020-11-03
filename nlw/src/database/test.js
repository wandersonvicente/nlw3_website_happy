const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
    lat: "-8.0635765",
    lng: "-34.8818558",
    name: "Lar d0s meninos",
    about: "Presta assistência a crianças de 05 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "99999999999",
    images:[
        "https://images.unsplash.com/photo-1597997547878-c01a230efdc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(), 
    instructions: "Venha caso sesentir a vontade e traga muito amor e paciência para dar.",
    opening_hours:"Horário de visitas Das 8h às 18h",
    open_on_weekends: "0"

   });

    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar somente 1 um orphanage, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)



   // deletar dado da tabela
   //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
   //Para deletar de tudo na tabala ("DELETE FROM orphanages(ou o nome da tabela)")

})

