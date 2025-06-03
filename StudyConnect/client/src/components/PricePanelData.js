import p1 from "../assets/images/p1.png"
import p2 from "../assets/images/p2.png"
import p3 from "../assets/images/p3.png"

/**
 * 
 * exports data for price panel
 */
export const pricePanelData = [
    {
        icon: <img className="price-img" src={p1} />,
        plan: "Разовое занятие",
        description: "Единоразовый урок",
        specifics: "1 занятие по любому предмету",
        price: "1500₽",
    },
    {
        icon: <img className="price-img" src={p2} />,
        plan: "Базовый план",
        description: "Несколько дополнительных занятий",
        specifics: "3 занятия по любым предметам в месяц",
        price: "4200₽",
    },
    {
        icon: <img className="price-img" src={p3} />,
        plan: "Профессиональный план",
        description: "Для любознательных умов",
        specifics: "5 занятий по любым предметам в месяц",
        price: "6000₽",
    },
]