import React, { Component } from 'react'
import NewsItem from "./NewsItem";

export class News extends Component {

    articles =  [
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "KIM TONG-HYUNG",
          "title": "Tens of thousands of young scouts to leave world jamboree in South Korea as storm Khanun looms - The Associated Press",
          "description": "South Korea is preparing to evacuate tens of thousands of scouts from a coastal jamboree site as Tropical Storm Khanun looms, scouting officials said Monday. The World Organization of the Scout Movement said it received confirmation from South Korea’s governm…",
          "url": "https://apnews.com/article/south-korea-jamboree-scouts-storm-khanun-3427a308cbca3c573bcffc9d3e0cdc8a",
          "urlToImage": "https://dims.apnews.com/dims4/default/869343d/2147483647/strip/true/crop/5000x2813+0+260/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F90%2Ffc%2F8e22077d1456b392a28fde199b6e%2Fddd23067612a41d385daa5f8e9fca6db",
          "publishedAt": "2023-08-07T07:58:00Z",
          "content": "SEOUL, South Korea (AP) South Korea will evacuate tens of thousands of scouts by bus from a coastal jamboree site as Tropical Storm Khanun looms, officials said Monday.\r\nThe vehicles beginning Tuesda… [+5231 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daily Beast"
          },
          "author": "Erik Uebelacker, Matt Young",
          "title": "Mark Zuckerberg Calls Out Elon Musk Over Not Replying About Cage Fight Battle Date - The Daily Beast",
          "description": "Elon Musk spent much of Sunday talking up his apparent fight with Zuckerberg, but on Sunday afternoon the Meta CEO told a different story.",
          "url": "https://www.thedailybeast.com/musk-wants-to-livestream-his-cage-fight-with-zuckerberg-on-x",
          "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1691367993/230806-zuck-elon-fight-tease_lrxsjg",
          "publishedAt": "2023-08-07T07:24:50Z",
          "content": "Mark Zuckerberg called out Elon Musk Sunday for dodging his attempts to schedule a date for their battle-of-the-billionaires cage match, saying that he is not holding my breath waiting for a response… [+2400 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Athletic"
          },
          "author": "Paul Tenorio and The Athletic Staff",
          "title": "Lionel Messi scores 2 goals as Inter Miami beats FC Dallas on penalties in Leagues Cup match - The Athletic",
          "description": "The Argentine now has seven goals and one assist in four matches with Inter Miami.",
          "url": "https://theathletic.com/4754724/2023/08/07/lionel-messi-scores-2-goals-as-inter-miami-beats-fc-dallas-on-penalties-in-leagues-cup-match/",
          "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/08/06235215/USATSI_21157251-scaled.jpg",
          "publishedAt": "2023-08-07T07:19:44Z",
          "content": "Lionel Messis brilliant start for Inter Miami continued on Sunday as the superstar scored a brace in the teams Leagues Cup round of 16 match against FC Dallas. The teams fought to a thrilling 4-4 dra… [+2046 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Julian Mark",
          "title": "Trucking giant Yellow files for Chapter 11 bankruptcy - The Washington Post",
          "description": "The freight hauler had experienced heavy losses as it battled with the Teamsters over a plan to restructure the company and refinance $1.3 billion in debt.",
          "url": "https://www.washingtonpost.com/business/2023/08/06/yellow-chapter-11-bankruptcy/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/AJXMD5MIANEVTU6L3W22WYYE4Q_size-normalized.jpg&w=1440",
          "publishedAt": "2023-08-07T06:58:00Z",
          "content": "Comment on this story\r\nComment\r\nTrucking giant Yellow filed for Chapter 11 bankruptcy on Sunday, marking the final chapterfor the 99-year-old company and the industrys largest failure.\r\nThe filing in… [+4047 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Dan Murphy, Natasha Turak",
          "title": "Oil giant Saudi Aramco posts 38% drop in second-quarter profit as lower prices bite - CNBC",
          "description": "The recent decline in profitability was in line with industry trends and a broader decline in oil prices in the first half of this year.",
          "url": "https://www.cnbc.com/2023/08/07/oil-giant-saudi-aramco-posts-sharp-drop-in-second-quarter-profit-as-lower-prices-bite.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/105249533-RTX67GXM.jpg?v=1691390990&w=1920&h=1080",
          "publishedAt": "2023-08-07T06:49:50Z",
          "content": "Saudi state oil giant Aramco reported 112.81 billion riyal ($30.07 billion) in net profit in the second quarter, a drop of nearly 40% from the same period of last year amid a decline in hydrocarbon p… [+3050 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Elliot Smith",
          "title": "Siemens Energy CEO on $2.4 billion wind turbine hit: We were 'going too fast' with new products - CNBC",
          "description": "Siemens Energy has booked 2.2 billion euros ($2.4 billion) in costs due to quality issues at its wind turbine unit.",
          "url": "https://www.cnbc.com/2023/08/07/siemens-energy-books-2point4-billion-wind-turbine-hit-in-q3-2023-results.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107010561-1643887126190-gettyimages-1235816565-AFP_9PH336.jpeg?v=1691389904&w=1920&h=1080",
          "publishedAt": "2023-08-07T06:31:44Z",
          "content": "Siemens Energy CEO Christian Bruch said Monday that the company needs to slow down its rollout of new products after booking 2.2 billion euros ($2.4 billion) in costs due to quality issues at its win… [+2532 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Euronews"
          },
          "author": null,
          "title": "Russia retaliates against Ukraine for tanker attack - Euronews",
          "description": "All the latest developments from the war in Ukraine.",
          "url": "https://www.euronews.com/2023/08/07/russia-retaliates-against-ukraine-for-tanker-attack",
          "urlToImage": "https://static.euronews.com/articles/stories/07/80/57/62/1000x563_cmsv2_1bc0d15b-4a25-560f-be40-dff2fbf5995e-7805762.jpg",
          "publishedAt": "2023-08-07T05:50:01Z",
          "content": "All the latest developments from the war in Ukraine. \r\n Drone headed for Moscow shot down\r\nRussia said on Monday it had intercepted a Ukrainian drone in the Kaluga region, less than 200 km southwest … [+1857 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Suntimes.com"
          },
          "author": "Georgia Nicols",
          "title": "Horoscope for Monday, August 7, 2023 - Chicago Sun-Times",
          "description": null,
          "url": "https://chicago.suntimes.com/2023/8/7/23809185/horoscopes-today-monday-august-7-2023",
          "urlToImage": "https://cst.brightspotcdn.com/dims4/default/10a4812/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F2BL4pUClSmTYnkAFMtJHCLJGH84%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24812397%2FGeorgia_mug.jpeg",
          "publishedAt": "2023-08-07T05:03:29Z",
          "content": "Moon Alert\r\nAfter 1:45 a.m. Chicago time, there are no restrictions to shopping or important decisions. The moon is in Taurus.\r\nAries (March 21-April 19)\r\nTrust your money-making ideas because youre … [+3887 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cageside Seats"
          },
          "author": "Randall Ortman",
          "title": "Rumor Roundup: Brock Lesnar plan, WWE creative issue, Roman Reigns’ title reign, more! - Cageside Seats",
          "description": "The latest rumors, including what’s next for Brock Lesnar, an issue WWE creative had at SummerSlam, the decision making on Reigns’ title, and more!",
          "url": "https://www.cagesideseats.com/2023/8/7/23822326/rumor-roundup-aug-7-2023-brock-lesnar-plan-wwe-creative-issue-roman-reigns-title-reign",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/3o9RQiwIVT2Suv0sOe_McoPpVIk=/0x133:1200x761/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24834177/043_SS_08052023AT_17563__43e1d40f82768e75938bc2b4acb46b45.jpg",
          "publishedAt": "2023-08-07T05:00:00Z",
          "content": "Speculating on the rumors surrounding pro wrestling is a favored pastime of many fans, perhaps second only to actually watching the matches. In this daily column, we take a look at the latest rumors … [+2086 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Natasha Bertrand",
          "title": "US military responded to Chinese and Russian vessels near Alaska - CNN",
          "description": "A Russian and Chinese naval patrol consisting of several vessels operated off the coast of Alaska last week, defense officials and lawmakers said over the weekend – a show of force that prompted a US military response but did not pose a threat to the US or Ca…",
          "url": "https://www.cnn.com/2023/08/06/politics/us-military-russia-china-vessels/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230806194718-norad-northcom-headquarters-file-2018.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2023-08-07T04:47:00Z",
          "content": "A Russian and Chinese naval patrol consisting of several vessels operated off the coast of Alaska last week, defense officials and lawmakers said over the weekend a show of force that prompted a US m… [+2773 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Reuters",
          "title": "Russia to evacuate village for first lunar lander mission in half century - Reuters",
          "description": "Russia will evacuate a village in its far east on Aug. 11 as part of the launch of Russia's first lunar lander mission in nearly half a century, a local official said on Monday.",
          "url": "https://www.reuters.com/world/europe/russia-evacuate-village-first-lunar-lander-mission-half-century-2023-08-07/",
          "urlToImage": "https://www.reuters.com/resizer/NMK_NQgToWTfu3LuaOoiXZ69rN8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MOGNYPNWEVPIXDAGHDLEP2E6YM.jpg",
          "publishedAt": "2023-08-07T04:40:09Z",
          "content": "Aug 7 (Reuters) - Russia will evacuate a village in its far east on Aug. 11 as part of the launch of Russia's first lunar lander mission in nearly half a century, a local official said on Monday.\r\nTh… [+1285 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KABC-TV"
          },
          "author": null,
          "title": "Firefighting helicopter crashes while battling brush fire in Riverside County - KABC-TV",
          "description": "A firefighting helicopter crashed Sunday night while battling a brush fire in Riverside County, ABC News has confirmed.",
          "url": "https://abc7.com/helicopter-crash-riverside-county-broadway-fire-chopper-collision/13610287/",
          "urlToImage": "https://cdn.abcotvs.com/dip/images/13610463_080623-kabc-stringer-helicopter-crash-vid.jpg?w=1600",
          "publishedAt": "2023-08-07T03:50:44Z",
          "content": "CABAZON, Calif. (KABC) -- A firefighting helicopter crashed Sunday night while battling a brush fire in Riverside County, ABC News has confirmed.\r\nThe collision happened as crews were battling the Br… [+686 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Street Fighter 6 A.K.I Official Teaser Trailer | EVO 2023 - GameSpot",
          "description": "A maniacal poison aficionado, A.K.I. can’t wait to sink her nails into her opponents as the second character from Year 1. Owners of the Deluxe and Ultimate E...",
          "url": "https://www.youtube.com/watch?v=pfcgP65UvrY",
          "urlToImage": "https://i.ytimg.com/vi/pfcgP65UvrY/maxresdefault.jpg",
          "publishedAt": "2023-08-07T02:25:31Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Billboard"
          },
          "author": "Ashley Iasimone",
          "title": "Ne-Yo Apologizes for Comments on Parenting and Gender Identity: ‘I Plan to Better Educate Myself on the Topic’ - Billboard",
          "description": "The singer says he plans to “approach future conversations with more empathy.”",
          "url": "https://www.billboard.com/music/music-news/ne-yo-apology-gender-identity-comments-1235385934/",
          "urlToImage": "https://www.billboard.com/wp-content/uploads/2022/06/Ne-Yo-show-bet-awards-2022-billboard-1548.jpg?w=1024",
          "publishedAt": "2023-08-07T02:13:50Z",
          "content": "Ne-Yo has issued an apology for the comments he recently made regarding transgender kids.\r\n“After much reflection, I’d like to express my deepest apologies to anyone that I may have hurt with my comm… [+3098 chars]"
        },
        {
          "source": {
            "id": "nhl-news",
            "name": "NHL News"
          },
          "author": "Derek Van Diest",
          "title": "Karlsson trade accelerates Sharks rebuild - NHL.com",
          "description": "San Jose Sharks general manager Mike Grier continued to rebuild their roster, trading three-time Norris Trophy-winning defenseman Erik Karlsson to the Pittsburgh Penguins on Sunday.",
          "url": "https://www.nhl.com/news/erik-karlsson-trade-accelerates-san-jose-sharks-rebuild/c-345531888",
          "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/345531890/1024x576/cut.jpg",
          "publishedAt": "2023-08-07T01:59:37Z",
          "content": "San Jose Sharks general manager Mike Grier continued to rebuild their roster, trading three-time Norris Trophy-winning defenseman Erik Karlsson to the Pittsburgh Penguins on Sunday.The Sharks acquire… [+4652 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "CDC recommends new RSV prevention drug - FOX54 News Huntsville",
          "description": "RSV could be dangerous for some children, leading the FDA to approve Beyfortus, a monoclonal antibody treatment, for infants and toddlers.",
          "url": "https://www.youtube.com/watch?v=PKtyac1Voao",
          "urlToImage": "https://i.ytimg.com/vi/PKtyac1Voao/hqdefault.jpg",
          "publishedAt": "2023-08-07T01:42:17Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Pope Francis Says Catholic Church Open To LGBT People But... - NDTV",
          "description": "Pope Francis said on Sunday that the Catholic Church is open to everyone, including homosexuals, and that it has a duty to accompany them on a personal path of spirituality but within the framework of its rules.",
          "url": "https://www.ndtv.com/world-news/pope-francis-says-catholic-church-open-to-lgbt-people-but-4275168",
          "urlToImage": "https://c.ndtvimg.com/2022-07/6l5fpgn_pope-francis-_625x300_30_July_22.jpg",
          "publishedAt": "2023-08-07T01:40:29Z",
          "content": "Francis has pushed a series of reforms since he became pope 10 years ago.\r\nVatican City: Pope Francis said on Sunday that the Catholic Church is open to everyone, including homosexuals, and that it h… [+3490 chars]"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Niger closes airspace as ECOWAS deadline for coup reversal expires - Al Jazeera English",
          "description": "Coup leaders say there has been a pre-deployment of troops in two Central African nations for military intervention.",
          "url": "https://www.aljazeera.com/news/2023/8/7/niger-closes-airspace-as-ecowas-deadline-for-coup-reversal-expires",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-06T201957Z_1784517998_RC2KI2AD88F2_RTRMADP_3_NIGER-SECURITY-1691370556.jpg?resize=1920%2C1440",
          "publishedAt": "2023-08-07T01:40:25Z",
          "content": "Nigers coup leaders have closed the countrys airspace after rejecting an ultimatum from West African states to reinstate deposed President Mohamed Bazoum or risk military intervention.\r\nThe move, ann… [+5737 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Guardian staff reporter",
          "title": "Barbie movie tops $1bn in global box office ticket sales, breaking record for female directors - The Guardian",
          "description": "Barbie is now the biggest film to be directed by one woman, with director Greta Gerwig supplanting Wonder Woman’s Patty Jenkins",
          "url": "https://www.theguardian.com/film/2023/aug/07/barbie-movie-tops-1bn-in-global-box-office-ticket-sales-breaking-record-for-female-directors",
          "urlToImage": "https://i.guim.co.uk/img/media/1260ff76d33105a0f8d3401add4c7e04b3aab9f9/309_0_5110_3067/master/5110.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=63f89db97923699121dad01b8bb9b881",
          "publishedAt": "2023-08-07T01:01:00Z",
          "content": "Barbie has broken the US$1bn mark since its debut more than two weeks ago, with director Greta Gerwig breaking a record for female directors previously held by Wonder Woman director Patty Jenkins.\r\nW… [+7872 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Daily Beast"
          },
          "author": "Erik Uebelacker",
          "title": "Maryland Town on Edge After Apparent Murder Off Popular Nature Trail - Yahoo News",
          "description": "Harford County Sheriff's OfficeA frantic weekend search for 37-year-old Rachel Morin—who disappeared Saturday evening near the Ma and Pa Trail in Bel Air...",
          "url": "https://www.thedailybeast.com/maryland-town-on-edge-after-apparent-murder-of-rachel-morin-off-ma-and-pa-trail",
          "urlToImage": "https://media.zenfs.com/en/thedailybeast.com/b16133c68530ef8dc3165b30c163c5ff",
          "publishedAt": "2023-08-07T00:49:00Z",
          "content": "Harford County Sheriff's Office\r\nA frantic weekend search for 37-year-old Rachel Morinwho disappeared Saturday evening near the Ma and Pa Trail in Bel Air, Marylandhas ended after investigators disco… [+2166 chars]"
        },
    ]
    constructor(){
      
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }

  render() {
    return (
   <div className="contianer my-3">
     <h2> news mokey</h2>
    
        <div className = "row">
        {this.state.articles && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description = {element.description} imageUrl={element.urlToImage}/>
                </div>
})}
            
                </div>
      </div>
    )
  };
}

export default News
