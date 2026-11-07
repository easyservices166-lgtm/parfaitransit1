window.PT_MEDIA = {
  photos: [
    ["vehicles","Chargement de véhicules"],["vehicles","Expédition en conteneur"],["vehicles","Transport automobile"],["logistics","Préparation des marchandises"],
    ["logistics","Opérations logistiques"],["vehicles","Toyota Hilux · Export"],["vehicles","Chargement sur plateau"],["vehicles","Transport de camion"],
    ["logistics","Équipements et fret"],["logistics","Chargement maritime"],["shipping","Bateau · Transport"],["shipping","Arrimage de véhicules"],
    ["shipping","Expédition automobile"],["vehicles","Véhicule en conteneur"],["vehicles","Chargement sécurisé"],["vehicles","Opération de chargement"]
  ].map((p,i)=>({type:"photo",category:p[0],src:"media/photos/photo-"+String(i+1).padStart(2,"0")+".jpg",title:p[1]})),
  videos: Array.from({length:31},(_,i)=>{
    const n=i+1, category=["vehicles","shipping","logistics"][(n-1)%3];
    return {type:"video",category,src:"media/videos/video-"+String(n).padStart(2,"0")+".mp4",poster:"media/posters/video-"+String(n).padStart(2,"0")+".jpg",title:(category==="vehicles"?"Opération de chargement automobile ":category==="shipping"?"Expédition et transport maritime ":"Opération logistique ")+String(n).padStart(2,"0")};
  })
};