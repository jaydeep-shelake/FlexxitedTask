import React from 'react'
import Card from './Card'
const Cards = () => {

    const data=[
        {
            img:'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=47526bb8-dd28-4d34-95ef-ddbc11baa8d7&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b',
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=0a8f739d-1b46-4bbf-8239-e230178657d4&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b',
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=47526bb8-dd28-4d34-95ef-ddbc11baa8d7&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b',
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
        {
            img:'https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=0a8f739d-1b46-4bbf-8239-e230178657d4&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b',
            title:"Essential chiffon hijab - Black",
            price:'$5.99',
            orignalPrice:'$5.99'
        },
    ]
    return (
        <div className="w-full p-10 flex flex-col justify-start">
            <p className="text-xs">FEATURED COLLECTION</p>
            <div className="flex items-center justify-between">
                <h1 className="text-xl">SPRING OASIS</h1>
                <div className="p-3 border-2 border-black text-md">SHOP THE COLLECTION</div>
            </div>
            <div className=" grid grid-flow-row-dense grid-cols-4 items-center justify-evenly pt-3 mt-4">
                { 
                data.map((product)=>(
                    <Card
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    originalPrice={product.orignalPrice}
                    />
                )) 
                }
            </div>
        </div>
    )
}

export default Cards
