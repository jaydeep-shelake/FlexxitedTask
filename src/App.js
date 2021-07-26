import React from 'react'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Header from './components/Header'
const App = () => {
    return (
        <div className="w-full h-screen mb-12" style={{marginBottom:'20px'}}>
            <Header/>
           <Banner img="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=bd0b0bd6-2e61-40f2-ac56-e403c52f05b8&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b"/>
           <Cards/>
           <Banner
           img="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:fccdda69-e8c4-4ad4-8eed-d19665ff8f51;revision=0?component_id=84676aa2-98ee-4feb-9f4f-9497654beb32&api_key=CometServer1&access_token=1627335183_urn%3Aaaid%3Asc%3AUS%3Afccdda69-e8c4-4ad4-8eed-d19665ff8f51%3Bpublic_155dbc31e06f0ad6de10acc3a0331f68e4c45b0b"

           text="ALL THE VERITIES OF HIJABS YOU NEED"
           />
        </div>
    )
}

export default App
