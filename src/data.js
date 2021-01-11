import { v4 as uuidv4 } from "uuid";

function figuresMetal(){
    return [
        {
            name: "Профил",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/profili/15-15-1.5-cherni-metali-smartmetalgroup-550x550.jpg.webp",
            id: uuidv4(),
            active: true,
        },
        {
            name: "Квадрат",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/profili/15-15-1.5-cherni-metali-smartmetalgroup-550x550.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Тръба",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/cherni-trubi-kat-120x120.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Винкел",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/cherni-vinkel-kat-120x120.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Шина",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/cherni-trubi-kat-120x120.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Лист",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/aluminieva-lamarina-rifel-648-120x120.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "П - профил",
            formula: "",
            picture: "data:image/png;base64,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",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Т - профил",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/hea-profili-cena-na-ton-62-550x550.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Двоен Т - профил",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/hea-profili-cena-na-ton-62-550x550.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Плътен профил",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/profili/15-15-1.5-cherni-metali-smartmetalgroup-550x550.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Плътен квадрат",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/profili/15-15-1.5-cherni-metali-smartmetalgroup-550x550.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Плътен прът",
            formula: "",
            picture: "https://shop.smartmetalgroup.com/image/cache/catalog/metali/cherni%20metali/cherni-kategorii/cherni-trubi-kat-120x120.jpg.webp",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Плътен шестостенен профил",
            formula: "",
            picture: "data:image/jpeg;base64,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",
            id: uuidv4(),
            active: false,
        },
    ]
}

export default figuresMetal;