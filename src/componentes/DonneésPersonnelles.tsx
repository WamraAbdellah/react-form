export const DonneésPersonnelles=()=>{
    return(
    <div className="container">
        <br />
        <h1 className="title1">Données personnelles</h1>
        <div className="ob">
          <label htmlFor="linkedin">Titre du CV :</label><br />
          <input
            type="text"
            id="titre"
            placeholder="Ex. Titre de CV"
            required
          /><br />

          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" placeholder="Ex. DUBOIS" required /><br />

          <label htmlFor="nom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            placeholder="Ex. Jean"
            required
          /><br />

          <label htmlFor="addresse">Adresse :</label><br />
          <input
            type="text"
            id="adresse"
            placeholder="Ex. 12 Rue Ibn Tachfine, Hay Riad , Rabat "
            required
          /><br />

          <label htmlFor="date de naissance">Age :</label><br />
          <input type="number" min={18} max={100} id="age" placeholder="Ex. 20" required /><br />

          <label htmlFor="tel">Tél :</label>
          <input
            type="text"
            id="tel"
            placeholder="Ex.+212 6 00 00 00 00"
            required
          /><br />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Ex. yourmail@gmail.com"
            required
          /><br />
        </div>

        <label htmlFor="sexe">sexe:</label><br /><br />
        <div className="sexe">
          <input type="radio" name="sexe" value="homme" id="homme" />
          <label>Homme</label>
          <input type="radio" name="sexe" value="femme" id="femme" />
          <label>femme</label>
        </div>
    </div>

    )
}