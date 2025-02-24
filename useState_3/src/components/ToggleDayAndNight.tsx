import { useState } from "react";

//! Meine erste eigene Lösung funktioniert nur einmalig
// export default function ToggleDayAndNight () {
//     //Werte für die Inhalte von h1 und button
//     const [headline, setHeadline] = useState("Day");
//     const [button, setChange] = useState("Night");

//     //Werte für die Styles von div, h1 und button
//     const [styleHeadline, setStyleHeadline] = useState({
//         color: "black",
// });
// const [styleButton, setStyleButton] = useState({
//     color: "black",
//     backgroundColor: "white",
//     border: "solid 1px black"

// });
// const [styleDiv, setStyleDiv] = useState({
//     backgroundColor: "white",
//     width: "500px",
//     height: "500px"
// });

// //Funktion, um Inhalte und Styles zu ändern-->wir bei onlick aufgerufen
// function changeStyleAndContent() {
//     setHeadline("Night")
//     setChange("Day")

//     setStyleButton({
//         color: "white",
//         backgroundColor: "black",
//         border: "solid 1px white"
//     })

//     setStyleHeadline({
//         color: "white"
//     })

//     setStyleDiv({
//         backgroundColor: "black",
//         width: "500px",
//         height: "500px"
//     })
// }

//     return (
//         <>
//         <div style={styleDiv}>
//         <h1 style={styleHeadline}>{headline}</h1>
//         <button style={styleButton} onClick={changeStyleAndContent}>Change to {button}</button>
//         </div>
//         </>
//     )
// }


export default function ToggleDayAndNight() {

    //wenn Zusatnd getoggelt werden soll mit boolean arbeiten
    const [toggleDayAndNight, setToggleDayAndNight] = useState(true);

    //diese Funktion sorgt dafür, dass boolean von true zu false wechselt und umgekehrt
    //später bei onClick aufrufen
    //hier wird Parameter mitgegeben, muss beim aufrufen nicht weiter gegeben werden, da setContentAndStyle schon mit Variable boolean toggleDayAndNight verknüpft ist
    // const toggleStyleAndContent = () => {
    //     setContentAndStlye(prevState => !prevState);
    //   };


    //Style und Inhalt bestimmen mit ? : abhängig von boolean
    //wenn ich mit Klassen gearbeitet hätte, wäre das schneller gegangen
    const styleDiv = toggleDayAndNight
    ? {
        backgroundColor: "white",
        width: "100vw",
        height: "100vh"
    }
    : {
        backgroundColor: "black",
        width: "100vw",
        height: "100vh"
    }

    const styleHeadline = toggleDayAndNight
    ? {
        color: "black"
    }
    : {
        color: "white"
    }

    const styleButton = toggleDayAndNight
    ? {
        color: "black",
        backgroundColor: "white",
        border: "solid 1px black"
    }
    : {
        color: "white",
        backgroundColor: "black",
        border: "solid 1px white"
    }

    const headline = toggleDayAndNight ? "Day" : "Night";
    const button = toggleDayAndNight ? "Night" : "Day";


  return (
    //hier oben definierte Variablen übergeben
    <>
      <div style={styleDiv}>
        <h1 style={styleHeadline}>{headline}</h1>
        {/* hier wird beim Klicken der boolean Wert mit Hilfe einer anonymen Funktion immer weiter verändert */}
        <button style={styleButton} onClick={()=>setToggleDayAndNight(! toggleDayAndNight)}>
          Change to {button}
        </button>
      </div>
    </>
  );
}


