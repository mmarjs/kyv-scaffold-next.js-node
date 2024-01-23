// TODO: ADMIN: If you're going to update this file, you need to update in /routes/issueResponse.js

export const Issues = [
  // NON FEATURED ISSUE QUESTION
  {
    name: 'General Question',
    shortName: 'General',
    questionCandi:
      'If elected as a City Councillor, what would be your top priority, and how will you address it?',
    questionMayor: `If elected as Toronto's Mayor, what would be your top priority, and how will you address it?`,
    number: 0,
    slug: 'general',
    description: `n/A`,
    img: 'n/A',
    featured: false,
  },
  // HOUSING
  {
    name: 'Housing',
    shortName: 'Housing',
    questionCandi:
      'What should the next City Council do about housing in Toronto? Why?',
    questionMayor:
      'What should the next Mayor do about housing in Toronto? Why?',
    number: 1,
    slug: 'housing',
    description: `
      <p><em>The Know Your Vote T.O. “Big Issues” primers are meant to be starting points for readers to continue their own learning and investigating.</em></p>

      <p><em>Note: The information sources documented and linked in the content below are from the City of Toronto website and well-known media and learning resources.</em></p>

      <h2 id="toc_0">Where we live shapes our lives. What kind of housing is built, where, and how much it costs are all complicated questions. Here are three ways City Government plays a role in managing housing in Toronto.</h2>
      
      <h3 id="toc_1">1. City Government Approves Proposals for New Housing Development</h3>
      
      <p>City Government is responsible for approving or rejecting proposals for all new buildings, including houses, condos, and apartments. This process helps align everything that gets built in Toronto with the City’s Official Plan and zoning by-law, which are approved by City Council.</p>
      
      <p>City Government considers many different things when making decisions about what can be built where. The city needs enough new houses, condos, and apartments to keep up with population growth and the demand for housing. But development can also bring challenges — it can change the character of neighbourhoods too quickly, or make it hard for schools, streets, water pipes, parks, and transit to meet the needs of all new residents.</p>
      
      <p><a target="_blank" target="_blank" href="https://www.toronto.ca/city-government/planning-development/">The City Planning Division&#39;s website</a> has a lot of information, including new building proposals, the City’s Official Plan, and the ways you can get involved in the planning process.</p>
      
      <h4 id="toc_2">Facts about Housing Development in Toronto:</h4>
      
      <p>Though the COVID-19 pandemic slowed down the housing development rate estimated in 2017, Toronto continues to experience growth. Occupied private dwellings in Toronto increased by 47,963 units between 2016 and 2021. This represents 4.3% growth since 2016, and is about double the population growth rate for the same period (<a target="_blank" target="_blank" href="https://www.toronto.ca/wp-content/uploads/2022/02/92e3-City-Planning-2021-Census-Backgrounder-Population-Dwellings-Backgrounder.pdf">Go to information source - PDF</a>).</p>
      
      <p>The cost of a home is rising. In 2017, the average house cost had risen to over $775,000. In 2022, the average price of a home in Toronto is now $1.3-million (<a target="_blank" href="https://www.ctvnews.ca/business/what-s-the-average-price-of-a-home-where-you-live-1.5908421">Go to information source</a>). Rental costs have also increased 15% year-over-year (<a target="_blank" href="https://rentals.ca/blog/rentals-ca-march-2022-rent-report">Go to information source</a>).</p>
      
      <h3 id="toc_3">2. City Government Provides Community Housing</h3>
      
      <p>City Government provides housing assistance, often referred to as community, affordable, or social housing. Community housing offers rent support to people who need help paying their monthly rent. The main provider of community housing is the <a target="_blank" href="https://www.torontohousing.ca/About">Toronto Community Housing Corporation</a>, a non-profit solely owned by the City. Out other types of community housing also exist.</p>
      
      <ul>
      <li>The City has a useful <a target="_blank" href="https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/definitions-of-affordable-housing/#:%7E:text=Background,and%20other%20social%20housing%20providers.">learning guide</a> that explains all the ways they provide affordable housing. </li>
      <li><a target="_blank" href="https://www.torontomu.ca/content/dam/social-innovation/Programs/Affordable_Housing_Visual_Systems_Map_Oxford.pdf">This introductory report</a> (PDF) from Toronto Metropolitan University defines &quot;affordable housing&quot; and offers other information. </li>
      <li>The National Bank of Canada published <a target="_blank" href="https://www.nbc.ca/content/dam/bnc/en/rates-and-analysis/economic-analysis/housing-affordability.pdf">this report</a> (PDF) which compares housing price trends across major Canadian cities.</li>
      </ul>
      
      <h4 id="toc_4">Facts about Community Housing in Toronto:</h4>
      
      <p>The Toronto Community Housing Corporation is the largest community housing provider in Canada. It operates 2,100 buildings and houses 110,000 residents, about 4% of Toronto’s population (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2019/ex/bgrd/backgroundfile-134831.pdf">Go to information source - PDF</a>).</p>
      
      <p>Waitlists have been growing. More than 80,000 people are currently on a waitlist to receive some form of community housing support, up from nearly 79,000 people in 2021 (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2019/ex/bgrd/backgroundfile-134831.pdf">Go to information source - PDF</a>).</p>
      
      <h3 id="toc_5">3. City Government Operates Emergency Shelters</h3>
      
      <p>The City runs <a target="_blank" href="https://www.toronto.ca/community-people/community-partners/emergency-shelter-operators/about-torontos-shelter-system/new-shelter-locations/temporary-covid-19-shelter-sites/">emergency shelters</a>, which offer temporary beds to people who don’t have housing. The City has increased the number of emergency shelters due to the COVID-19 pandemic (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ph/bgrd/backgroundfile-173154.pdf">Go to information source - PDF</a>).</p>
      
      <p>You can explore nightly occupancy rates for emergency shelters using this <a target="_blank" href="https://open.toronto.ca/dataset/daily-shelter-occupancy/">City of Toronto data resource</a>.</p>
      
      <h4 id="toc_6">Facts about Emergency Shelters in Toronto:</h4>
      
      <p>Demand has risen and shelters are often full (<a target="_blank" href="https://www.toronto.ca/city-government/data-research-maps/research-reports/housing-and-homelessness-research-and-reports/shelter-system-requests-for-referrals/">Go to information source</a>). Between January and June 2022 on average 7,700 people used an emergency shelter bed per night, compared to 7,050 people in 2021 (<a target="_blank" href="https://www.cbc.ca/news/canada/toronto/city-data-average-number-no-shelter-bed-toronto-1.6540647">Go to information source</a>). On average, 40 people a night are turned away from shelters due to a lack of beds (<a target="_blank" href="https://www.cbc.ca/news/canada/toronto/city-data-average-number-no-shelter-bed-toronto-1.6540647">Go to information source</a>).</p>
      
      <p>1,000 new shelter beds are being created in the next 3 years. During the 2018 budget process, Council approved funding to open 1,000 new shelter beds over the next three years. By 2024, approximately 785 of these beds will be complete (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ph/bgrd/backgroundfile-173154.pdf">Go to information source - PDF</a>).</p>
    `,
    img: 'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/images%2Fhousing.png?alt=media&token=3a8f0843-84d1-46af-9e2f-c402031fc6a7',
    featured: true,
  },
  // CLIMATE ACTION
  {
    name: 'Climate Action',
    shortName: 'Climate Action',
    questionCandi:
      'What should the next City Council do to mitigate the effects of climate change and reduce its progression? How?',
    questionMayor:
      'What should the next Mayor do to mitigate the effects of climate change and reduce its progression? How?',
    number: 2,
    slug: 'climate-action',
    description: `
      <p><em>The Know Your Vote T.O. “Big Issues” primers are meant to be starting points for readers to continue their own learning and investigating.</em></p>

      <p><em>Note: The information sources documented and linked in the content below are from the City of Toronto website and well-known media and learning resources.</em></p>
      
      <h2 id="toc_0">What do cities have to do with climate change and climate action?</h2>
      
      <p>Cities are major contributors to climate change (<a target="_blank" href="https://www.un.org/en/climatechange/climate-solutions/cities-pollution#:%7E:text=Cities%20are%20major%20contributors%20to,cent%20of%20the%20Earth&#x27;s%20surface.">Go to information source</a>). </p>
      
      <p>2019-20 greenhouse gas emission sources in Toronto:</p>
      
      <ol>
      <li><strong>Buildings</strong> - 61%</li>
      <li><strong>Transportation</strong> - 30%</li>
      <li><strong>Waste</strong> - 5%</li>
      <li><strong>Industry</strong> - 4%</li>
      </ol>
      
      <p>(<a target="_blank" href="https://taf.ca/wp-content/uploads/2021/12/TAF_Carbon-emissions-inventory-GTHA_2021.pdf">Go to information source - PDF - page 21</a>)</p>
      
      <p>City councils have many different and creative options for tackling climate change. Here are a few non-prescriptive examples from other cities around the world:</p>
      
      <ul>
      <li>Brussels has created (and expanded) a low-emission zone in its city centre where high-emission vehicles are charged a fine upon entry (<a target="_blank" href="https://www.brusselstimes.com/245612/brussels-low-emission-zone-expands-1-july-which-cars-face-fines">Go to information source</a>). </li>
      <li>San Francisco has set the goal of being a zero waste city and currently diverts about 80% of its waste away from landfills (<a target="_blank" href="https://www.cnbc.com/2018/07/13/how-san-francisco-became-a-global-leader-in-waste-management.html">Go to information source</a>).</li>
      <li>Bogotá closes about 120 km of its roads to traffic every Sunday and opens them to pedestrians (<a target="_blank" href="https://www.vox.com/2016/10/9/13017282/bogota-ciclovia-open-streets">Go to information source</a>).</li>
      <li>Melbourne provides support for building owners to retrofit buildings to be more energy and water efficient, and to reduce waste (<a target="_blank" href="https://www.melbourne.vic.gov.au/building-and-development/sustainable-building/Pages/sustainable-building.aspx">Go to information source</a>).</li>
      </ul>
      
      <p>The next City of Toronto Council will have many opportunities to create policies and programs that can have a positive impact on climate change and build off of the work the City is already doing.</p>
      
      <h3 id="toc_1">Current Actions and Ambitions</h3>
      
      <h4 id="toc_2">Reducing Greenhouse Gas Emissions</h4>
      
      <p>Notwithstanding a decrease in emissions due to the effects of the Covid-19 pandemic, GHG emissions in Toronto have risen about 2% since 2015 (<a target="_blank" href="https://taf.ca/in-a-wave-of-ambitious-new-climate-targets-gtha-emissions-continue-to-rise">Go to information source</a>). In response, The City of Toronto has developed the TransformTO Net Zero Strategy (<a target="_blank" href="https://www.toronto.ca/services-payments/water-environment/environmentally-friendly-city-initiatives/transformto/">Go to information source</a>) to reduce greenhouse gas emissions (GHG) from 1990 levels to net zero by 2040. </p>
      
      <p>This is an acceleration of the original net-zero target of 2050 (<a target="_blank" href="https://www.toronto.ca/news/net-zero-by-2040-toronto-city-council-to-consider-bold-accelerated-climate-strategy/">Go to information source</a>). </p>
      
      <p>The City&#39;s new reduction targets are:</p>
      
      <ul>
      <li>30% by 2020</li>
      <li>45% by 2025</li>
      <li>65% by 2030</li>
      <li>Net zero by 2040</li>
      </ul>
      
      <h4 id="toc_3">Carbon Accountability</h4>
      
      <p>The City established a Carbon Accountability Tool to track progress on the Toronto Carbon Budget (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2022/bu/bgrd/backgroundfile-199161.pdf">Go to information source - PDF</a>). The accountability tool sets key performance metrics to  manage corporate and community greenhouse gas emissions within the limits of the City’s 2025, 2030, and 2040 emissions reduction targets. (<a target="_blank" href="https://taf.ca/in-a-wave-of-ambitious-new-climate-targets-gtha-emissions-continue-to-rise">Go to information source</a>). </p>
      
      <h4 id="toc_4">Reduce Use of Natural Gas</h4>
      
      <p>The City is focusing on transitioning from internal combustion to electric vehicles including buses and vehicles from the City-owned fleet (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-173758.pdf">Go to information source - PDF</a>). 
      The City plans to phase out natural gas use by installing electric appliances, and replacing conventional heating systems with electric heat pumps. (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-173756.pdf">Go to information source - PDF</a>).</p>
      
      <h4 id="toc_5">Increase Access to Low-Carbon Transportation Options</h4>
      
      <p>The City plans to expand the number of pedestrian and biking routes, as well as increase bicycle parking and bicycle share sites near TTC stations. Other proposals include allowing cargo e-bikes on roads and in bike lanes, improving management of traffic congestion, continued investment in expanding public transit, and green street programs.</p>
      
      <p>(<a target="_blank" href="https://www.toronto.ca/services-payments/water-environment/live-green-toronto/low-carbon-transportation/">Go to general information source</a>)</p>
      
      <h4 id="toc_6">Establish Performance Targets for New Construction and Existing Buildings Across the City</h4>
      
      <p>(<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-168400.pdf">Go to general information source - PDF</a>)</p>
      
      <p>Buildings are Toronto&#39;s largest carbon emitter. To reduce their impact Toronto plans to: </p>
      
      <ul>
      <li>Eliminate emissions for new constructions by 2030</li>
      <li>Expand and enhance retrofit financing for current existing buildings, including rebates</li>
      <li>Advocate and partner with other orders of government including the Government of Ontario </li>
      <li>Retrofit buildings to be more resilient to the extreme weather conditions caused by the climate crisis, including increased heat and flooding (<a target="_blank" href="https://workandclimatechangereport.org/2021/07/15/toronto-passes-new-standards-for-new-buildings-retrofits">Go to general information source</a>).</li>
      </ul>
      
      <h4 id="toc_7">Ensure More Reliable Electrical Distribution</h4>
      
      <p>The City plans to provide consistent and reliable access to uninterrupted electric service, which will support electrical based transportation, heating, as well as the possibility of local renewable electrical energy generation (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-173758.pdf">Go to information source - PDF - page 62</a>). </p>
      
      <h4 id="toc_8">Manage Natural Systems</h4>
      
      <p>Greenspaces in Toronto, which include trees in parks, ravines and on public streets, contribute to climate resilience, provide natural carbon removal, and help create a liveable and healthy city (<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-173758.pdf">Go to information source - PDF</a>). Trees and other green infrastructure also help manage extreme heat, rain and flooding. </p>
      
      <p>The City plans to: </p>
      
      <ul>
      <li>Increase tree canopy cover, biodiversity, and enhance greenspaces; The City has a target of increasing citywide tree canopy coverage to 40% by 2050 (<a target="_blank" href="https://www.google.com/url?q=https://www.toronto.ca/news/new-tree-canopy-study-shows-increase-in-toronto-s-tree-population/%23:~:text%3DThe%2520City%2520continues%2520to%2520recognize,Toronto%27s%2520resilience%2520to%2520climate%2520change&sa=D&source=docs&ust=1663247498546941&usg=AOvVaw25slldTwCTOCZrXSxziqRy">Go to information source</a>). </li>
      <li>Achieve equitable distribution of the urban forest, increasing tree canopy and naturalized green space where it is most needed.</li>
      <li>Expand and improve the park system.</li>
      <li>Improve the ecological health of ravines.</li>
      </ul>
      
      <p>(<a target="_blank" href="https://www.toronto.ca/legdocs/mmis/2021/ie/bgrd/backgroundfile-173758.pdf">Go to general information source - PDF - page 78</a>)</p>
    `,
    img: 'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/images%2Fclimate.png?alt=media&token=1dc026c4-58e4-4188-bf09-42b3506cea19',
    featured: true,
  },
  // GETTING AROUND THE CITY
  {
    name: 'Getting Around the City',
    shortName: 'Getting Around',
    questionCandi:
      'What should the next City Council do to improve the ability of the people of Toronto to get around safely and efficiently? How?',
    questionMayor:
      'What should the next Mayor do to improve the ability of the people of Toronto to get around safely and efficiently? How?',
    number: 3,
    slug: 'transportation',
    description: `
      <p><em>The Know Your Vote T.O. “Big Issues” primers are meant to be starting points for readers to continue their own learning and investigating.</em></p>

      <p><em>Note: The information sources documented and linked in the content below are from the City of Toronto website and well-known media and learning resources.</em></p>

    <h2 id="toc_0">Getting Around the City</h2>

    <h3 id="toc_1">We've all got places to go. How does Toronto's City Government help us get from Point A to Point B?</h3>

    <p>The City Government plays several important roles in our transportation system:</p>

    <ul>
    <li>Runs the Toronto Transit Commission (TTC) —our city's public transit system— including WheelTrans (<a target="_blank" href="https://www.toronto.ca/wp-content/uploads/2021/04/9100-TTC-2021-Public-Book.pdf">Go to information source - PDF</a>).</li>
    <li>Liaises with Metrolinx (an agency of the Government of Ontario) and Infrastructure Ontario on transportation to neighbouring cities.</li>
    <li>Builds and fixes roads and sidewalks.</li>
    <li>Decides how we use our streets by setting speed limits, and determining the best placement for traffic lights, pedestrian crossings, and dedicated bike and transit lanes.</li>
    <li>Manages parking on streets and in &quot;Green P&quot; parking lots.</li>
    </ul>

    <p>The Government of Ontario is responsible for  the 400-Series highways. Metrolinx is responsble for GO Transit and Presto.</p>

    <p>The City Government also approves where offices, homes, and stores get built. Over time, this can have a big impact on how we get around for two reasons:</p>
    
    <ul>
    <li>Getting the right mix of jobs, stores, and homes in each neighbourhood means residents take shorter trips.</li>
    <li>Putting more jobs and homes close to major transit stations decreases public transit commuting times.</li>
    </ul>

    <p>Toronto commuters mostly travel by:</p>

    <ol>
    <li><strong>Car</strong> - 51%</li>
    <li><strong>Public Transit</strong> - 37%</li>
    <li><strong>Walking or Biking</strong> - 12%</li>
    </ol>

    <p>(<a target="_blank" href="https://www12.statcan.gc.ca/census-recensement/2016/dp-pd/prof/details/page_Figures.cfm?Lang=E&amp;Tab=1&amp;Geo1=CSD&amp;Code1=3520005&amp;Geo2=CD&amp;Code2=3520&amp;SearchText=Toronto&amp;SearchType=Begins&amp;SearchPR=01&amp;B1=Journey%20to%20work&amp;TABID=1&amp;type=0">Go to information source</a>)</p>

    <h3 id="toc_2">How does Toronto's commute compare?</h3>

    <p>Here's how Toronto compares to Montreal, Vancouver, and five international cities with similar regional populations. Amongst this group, Toronto is in the middle of the pack when comparing both the time spent travelling via public transit and the time drivers spend in traffic jams (<a target="_blank" href="https://moovitapp.com/insights/en/Moovit_Insights_Public_Transit_Index-countries">Go to information source</a>).</p>

    <table>
      <thead>
        <tr>
          <th align="left">City</th>
          <th align="right">Number of people in the city region</th>
          <th align="right">Avg. daily commute time for public transit users</th>
          <th align="right">Avg. time per day drivers spend in traffic jams</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Toronto</td>
          <td align="right">6,202,225</td>
          <td align="right">52 mins</td>
          <td align="right">12 mins</td>
        </tr>
        <tr>
          <td>Montreal</td>
          <td align="right">4,291,732</td>
          <td align="right">47 mins</td>
          <td align="right">15 mins</td>
        </tr>
        <tr>
          <td>Vancouver</td>
          <td align="right">2,642,825</td>
          <td align="right">43 mins</td>
          <td align="right">19 mins</td>
        </tr>
        <tr>
          <td>Philadelphia</td>
          <td align="right">6,245,051</td>
          <td align="right">50 mins</td>
          <td align="right">15 mins</td>
        </tr>
        <tr>
          <td>Miami</td>
          <td align="right">6,166,488</td>
          <td align="right">58 mins</td>
          <td align="right">10 mins</td>
        </tr>
        <tr>
          <td>Washington&nbsp;DC</td>
          <td align="right">6,385,162</td>
          <td align="right">54 mins</td>
          <td align="right">7 mins</td>
        </tr>
        <tr>
          <td>Singapore</td>
          <td align="right">6,040,000</td>
          <td align="right">46 mins</td>
          <td align="right">17 mins</td>
        </tr>
        <tr>
          <td>Munich</td>
          <td align="right">6,200,000</td>
          <td align="right">40 mins</td>
          <td align="right">13 mins</td>
        </tr>
      </tbody>
    </table>

    <p>The pandemic has affected commuting and there was a drop in the amount of people commuting as many Canadians adopted remote work (<a target="_blank" href="https://www150.statcan.gc.ca/n1/pub/45-28-0001/2020001/article/00069-eng.htm">Go to information source</a>). As people return to the office, there is an expectation that the methods of commuting will not change from the data collected in 2016 (<a target="_blank" href="https://www150.statcan.gc.ca/n1/pub/45-28-0001/2020001/article/00069-eng.htm">Go to information source</a>).</p>

    <h3 id="toc_4">Our region is growing, and our transportation system is too.</h3>

    <p>Toronto's population grew by 62,785 residents between 2016 and 2021, an increase of 2.3% (<a target="_blank" href="https://www.toronto.ca/wp-content/uploads/2022/02/92e3-City-Planning-2021-Census-Backgrounder-Population-Dwellings-Backgrounder.pdf">Go to information source - PDF</a>).</p>

    <p>As our city and region grow more people are using our city's sidewalks, roads, buses, streetcars, subways, and GO Trains to get around.</p>

    <p>While the City Government is responsible for building and fixing its own streets and sidewalks, big transit and transportation projects  that benefit the region are often developed in partnership with the Governments of Ontario and Canada, and sometimes with other municipalities (<a target="_blank" href="https://www.toronto.ca/services-payments/streets-parking-transportation/transit-in-toronto/transit-expansion/">Go to information source</a>). Often, more than one government contributes to the funding that makes these projects a reality.</p>

    <p>The federal government of Canada announced $12-billion in funding for four projects in Toronto (<a target="_blank" href="https://toronto.citynews.ca/2021/05/11/feds-announce-12b-in-funding-for-4-major-transit-routes-in-toronto/">Go to information source</a>):</p>

    <ul>
    <li><p>The Ontario Line: connecting Exhibition Place through the downtown core to the Ontario Science Centre, creating 15 new stops over 16 km. (<a target="_blank" href="https://www.metrolinx.com/en/greaterregion/projects/ontario-line.aspx">Go to information source</a>).</p></li>
    <li><p>Eglinton Crosstown West extension: connecting Scarborough and Mississauga directly, along Eglinton Avenue. This project is partially funded by the Government of Ontario (<a target="_blank" href="https://news.ontario.ca/en/release/45826/ontario-reaches-major-milestone-on-eglinton-crosstown-lrt-construction">Go to information source</a>). </p></li>
    <li><p>Yonge Street North subway: extending Line 1 into Vaughan, Markham, and Richmond Hill by adding 5 stations and 8 km to the Line (<a target="_blank" href="https://www.metrolinx.com/en/greaterregion/projects/yonge-subway-extension.aspx">Go to information source</a>).</p></li>
    <li><p>Scarborough subway: extending Line 2 from Kennedy Station to Sheppard Avenue East, adding three new stops and 7.8 km to the Line (<a target="_blank" href="https://www.metrolinx.com/en/greaterregion/projects/scarborough-subway-extension.aspx">Go to information source</a>).</p></li>
    </ul>

    <p>Metrolinx (as noted above) coordinates with governments across the region to help figure out what transportation projects get built first. Metrolinx has created a <a target="_blank" href="https://www.metrolinx.com/en/regionalplanning/rtp/#:%7E:text=The%202041%20Regional%20Transportation%20Plan%20%E2%80%93%20the%202041%20RTP%20%2D%20is%20about,by%20bike%20or%20on%20foot.">regional plan</a> for growing our transportation system.</p>
    `,
    img: 'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-transportation.png?alt=media&token=1b8b6f20-5701-45f3-a4fe-58a453f50191',
    featured: true,
  },
  {
    name: `Taxes and Spending`,
    shortName: 'Taxes and Spending',
    questionCandi:
      'Should the next City Council change anything about municipal taxes or city services? Why?',
    questionMayor:
      'Should the next Mayor change anything about municipal taxes or city services? Why?',
    number: 4,
    slug: 'taxes-cost-of-living',
    description: `
      <p><em>The Know Your Vote T.O. “Big Issues” primers are meant to be starting points for readers to continue their own learning and investigating.</em></p>

      <p><em>Note: The information sources documented and linked in the content below are from the City of Toronto website and well-known media and learning resources.</em></p>
      
      <h2 id="toc_0">The trade-offs between taxes and spending are at the heart of a municipal government</h2>
      
      <p>Toronto raises money every year for the City Budget which supports the various services that keep the city running. </p>
      
      <p>The City has limited ways to generate revenue, and property tax is the largest source. This <a target="_blank" href="https://www.toronto.ca/city-government/budget-finances/city-finance/long-term-financial-plan/city-revenue-fact-sheet/#:%7E:text=The%20City%20of%20Toronto&#x27;s%20main,in%20the%20form%20of%20fees.">City Revenue Fact Sheet</a> has further information.</p>
      
      <h3 id="toc_1">Toronto's Operational vs. Capital Budget</h3>
      
      <p>The City has two different budgets (<a target="_blank" href="https://www.toronto.ca/wp-content/uploads/2017/11/97f7-A170XXXX_Budget_Basics_Understanding-final-web.pdf">Go to information source - PDF</a>): </p>
      
      <ul>
      <li>the <strong>operational budget</strong> covers day-to-day spending on commonly used programs such as parks and maintenance, garbage collection, public transit, and the Toronto Police Services, and, </li>
      <li>the <strong>capital budget</strong> supports the construction and repair of infrastructure, such as libraries, community centres, and water and sewage facilities.</li>
      </ul>
      
      <h3 id="toc_2">Taxes and Other Revenue</h3>
      
      <h4 id="toc_3">Taxes</h4>
      
      <p>The City's largest revenue source is property taxes levied against industrial, commercial and residential properties (<a target="_blank" href="https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax">Go to information source</a>). It accounts for about 31% of the City&#39;s revenue (<a target="_blank" href="https://www.toronto.ca/wp-content/uploads/2022/05/95be-2022-City-of-Toronto-Budget-Summary.pdf">Go to information source - PDF - page 9</a>).</p>
      
      <p>In 2022, The City of Toronto Council approved a 2.9% property tax increase on residential properties, a 1.45% increase on commercial properties, and 0.97% increase on industrial properties (<a target="_blank" href="https://www.toronto.ca/news/toronto-city-council-approves-2022-tax-supported-operating-and-capital-budgets">Go to information source</a>). This <a target="_blank" href="https://www.zoocasa.com/blog/?p=16695">article</a> provides an overview of Toronto’s property taxes compared to other Ontario cities.</p>
      
      <p>There is a Municipal Land Transfer Tax (or MLTT) on the title transfer of property. This tax accounts for approximately 6% of the City&#39;s revenue.</p>
      
      <h4 id="toc_4">Other Revenue</h4>
      
      <ul>
      <li><p>There are three &quot;rate supported&quot; city programs: Toronto Water Service, Toronto Parking Authority, and Solid Waste Management Services. These are paid for by users of these services (13% of revenue)</p></li>
      <li><p>Users also contribute with permit fees, fines, and TTC fares (5% of revenue) </p></li>
      <li><p>The City of Toronto receives grants, transfers, and subsidies from both the federal and provincial governments (27% of revenue)</p></li>
      </ul>
      
      <p>The <a target="_blank" href="https://www.toronto.ca/wp-content/uploads/2022/05/95be-2022-City-of-Toronto-Budget-Summary.pdf">2022 City of Toronto Budget Summary (PDF)</a> is a very detailed, long (900 pages!) and interesting look at the City including its taxes and revenue and beyond. </p>
      
      <h4 id="toc_5">How Taxes and Other Revenues are Spent</h4>
      
      <p>The 2021 City budget was spent on the following, in descending order: </p>
      
      <ul>
      <li>Emergency services, including the Toronto Police Service</li>
      <li>Capital and corporate financing</li>
      <li>Cost shared social programming</li>
      <li>The Toronto Transit Corporation (TTC)</li>
      <li>Governance and corporate services</li>
      <li>Other City operations</li>
      <li>Transportation services</li>
      <li>Other agencies</li>
      </ul>
      
      <p>(<a target="_blank" href="https://www.toronto.ca/city-government/budget-finances/city-budget/basic-basics/how-your-tax-dollars-work/">The City provides a good visual breakdown of how it spent the revenue collected in 2021</a>)</p>
      
      <p>City staff present a preliminary budget that is reviewed, deliberated on, changed, and finally approved. This annual process happens with input from residents and businesses, the City Budget Committee, the City Executive Committee, and finally City Council.</p>
      
      <h3 id="toc_6">The Rising Cost of Living in the City</h3>
      
      <p>Living in a city is expensive, and the cost of living in Toronto has increased in the past several years. This is due to several factors including the increase in food prices, the cost of housing which includes buying or renting a home (<a target="_blank" href="https://www.lowestrates.ca/resource-centre/personal-finance/cost-of-living-toronto">Go to information source</a>), and supply chain issues related to the pandemic. </p>
      
      <h4 id="toc_7">Renting in the City</h4>
      
      <p>Rental rates in Toronto dropped in 2020-2021 due to the pandemic as people took the opportunity to move out of the city. Other reasons included a decrease in demand due to a slowdown in immigration and a reduction of international students coming to the city (<a target="_blank" href="https://www.cbc.ca/news/canada/toronto/condo-rentals-toronto-covid-coronavirus-1.5616272">Go to information source</a>).</p>
      
      <p>This trend has reversed in 2022. The cost of a one-bedroom apartment is $2,044, a 12% increase year-over-year (<a target="_blank" href="https://rentals.ca/blog/rentals-ca-march-2022-rent-report">Go to information source</a>).</p>
      
      <h4 id="toc_8">Food</h4>
      
      <p>The City uses the Nutritious Food Basket (NFB) to measure the minimum cost of eating healthy for a person or family. The NFB is based on the cost of 67 food items from 12 grocery stores across the city. For example, it would cost just over $50 a week for a female between 31-50 to eat healthy (<a target="_blank" href="https://www.toronto.ca/community-people/health-wellness-care/health-programs-advice/nutrition-food-basket">Go to information source</a>). </p>
      
      <p>In 2022 food prices have increased by approximately 5% to 7% across Canada. These increases have also impacted food prices in the Toronto (<a target="_blank" href="https://cdn.dal.ca/content/dam/dalhousie/pdf/sites/agri-food/Food%20Price%20Report%20-%20EN%202022.pdf">Go to information source</a>).</p>
    `,
    img: 'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-city-council.png?alt=media&token=c96a2e06-66a2-4f60-93e9-eb4afe2f8a8d',
    featured: true,
  },
  {
    name: 'Policing and Community Safety',
    shortName: 'Policing & Safety',
    questionCandi: `What should the next City Council do about the City of Toronto's approach to policing its residents and making our communities safe? Why?`,
    questionMayor: `What should the next Mayor do about the City of Toronto's approach to policing its residents and making our communities safe and welcoming? Why?`,
    number: 5,
    slug: 'policing-and-safety',
    description: `
      <p><em>The Know Your Vote T.O. “Big Issues” primers are meant to be starting points for readers to continue their own learning and investigating.</em></p>

      <p><em>Note: The information sources documented and linked in the content below are from the City of Toronto website and well-known media and learning resources.</em></p>

      <h2 id="toc_0">Toronto Police Services and Community Safety Programs</h2>

      <p>The City of Toronto&#39;s municipal police service is formally known as the Toronto Police Service (TPS).</p>

      <p>The TPS has approximately 7,600 full- and part-time uniformed and civilian members. The TPS' mandate (<a target="_blank" href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/city-managers-office/agencies-corporations/agencies/toronto-police-service">Go to information source</a>) is to keep Toronto safe via:</p>

      <ul>
      <li>Maintaining public order to ensure safe and secure communities</li>
      <li>Providing emergency response to major threats and public safety risks</li>
      <li>Enforcing all applicable Toronto laws and bylaws, provincial offences and the Highway Traffic Act</li>
      <li>Community-based crime prevention initiatives</li>
      </ul>

      <p>The Toronto Police Service is the largest municipal police service in Canada and is overseen by the Toronto Police Services Board which ensures the provision of adequate and effective services in the City (<a target="_blank" href="https://tpsb.ca">Go to information source</a>). 
      One board member is the Mayor of Toronto, two are members of the City of Toronto Council, one is a Toronto citizen appointed by the Council, and three are appointed by the Government of Ontario (<a target="_blank" href="https://tpsb.ca/about/faq#:%7E:text=In%20Toronto%2C%20it%20states%20that,the%20City%20of%20Toronto%20Council">Go to information source</a>). </p>

      <p>The TPS and the Toronto Police Services Board are governed by the Police Services Act (<a target="_blank" href="https://www.ontario.ca/laws/statute/90p15">Go to information source</a>). </p>

      <h3 id="toc_1">Community Safety Initiatives</h3>

      <p>The City has several community safety initiatives. Some of those initiatives include the <strong>Toronto Police Service Neighbourhood Community Officers.</strong> These officers work to build relationships with members of Toronto's communities (<a target="_blank" href="https://toronto.ctvnews.ca/more-police-officers-on-foot-coming-to-neighbourhoods-across-toronto-1.5942871">Go to information source</a>).</p>

      <p>Other community safety initiatives with the TPS include:</p>

      <h5 id="toc_2">Furthering Our Community by Uniting Services (FOCUS)</h5>

      <p>The City of Toronto, United Way Toronto and Toronto Police Service aim to reduce risk, harm, crime, victimization and improve community resiliency and well-being (<a target="_blank" href="https://www.toronto.ca/community-people/public-safety-alerts/community-safety-programs/focus-toronto/">Go to information source</a>).</p>

      <h5 id="toc_3">Community Crisis Response Program (CCRP)</h5>

      <p>Local resources including the TPS work to provide resources and support to Toronto communities impacted by violent incidents. Local resources include community debriefings, safety audits, developing community safety projects, and education sessions (<a target="_blank" href="https://www.toronto.ca/community-people/public-safety-alerts/community-safety-programs/community-crisis-response-program/">Go to information source</a>).</p>

      <h4 id="toc_4">Non-Police Community Safety Programs</h4>

      <p>There has been a push for non-police models of response when it comes to community safety programs (Go to information source). One is the <strong>Community Crisis Support Service</strong> (<a target="_blank" href="https://www.toronto.ca/community-people/public-safety-alerts/community-safety-programs/toronto-community-crisis-service/">Go to information source</a>) which offers a police-free, community-based response to non-emergency crisis calls and welfare checks (<a target="_blank" href="https://www.cbc.ca/news/canada/toronto/toronto-community-crisis-service-pilot-projects-1.6402037">Go to information source</a>).</p>

      <p>You can read about all of the City of Toronto's community safety initiatives <a target="_blank" href="https://www.toronto.ca/community-people/public-safety-alerts/community-safety-programs/">here</a>.</p>

      <h3 id="toc_5">Toronto Police Services Funding and Budget</h3>

      <p>The City funds the Toronto Police Service, which receives approximately 10% of the City of Toronto's annual budget.</p>

      <p>The Toronto Police Services Board approved a 2022 budget of $1.1 billion, an increase of $24.8 million or 2.3% from the 2021 budget (<a target="_blank" href="https://www.cp24.com/news/toronto-police-seeking-nearly-25m-budget-increase-in-2022-1.5727600#:%7E:text=%E2%80%9CThis%20maintenance%20budget%20will%20allow,of%20Toronto&#x27;s%20overall%20operating%20budget.">Go to information source</a>) which was given final approval by Toronto Council (<a target="_blank" href="https://globalnews.ca/news/8503927/toronto-police-board-unanimously-approves-increased-operating-budget-for-2022/">Go to information source</a>).</p>

      <h3 id="toc_6">What influence does City Council have over Police Services and Community Safety?</h3>

      <h4 id="toc_7">Calls to defund the Police</h4>

      <p>The City approves the budget for the Toronto Police Service and has received calls to reduce funding and instead direct the money towards community services (<a target="_blank" href="https://toronto.citynews.ca/2022/02/17/toronto-approves-2022-budget/#:%7E:text=Despite%20heated%20debate%20and%20continued,of%20%2425%20million%20this%20year.">Go to information source 1</a> and <a target="_blank" href="https://ccla.org/wp-content/uploads/2021/07/Rethinking-Community-Safety-A-Step-Forward-For-Toronto-Full-Report-12.pdf">source 2</a>). </p>

      <h4 id="toc_8">Racial Profiling Against Marginalized Groups</h4>

      <p>The Toronto Police Service released a report, &quot;Race &amp; Identity Based Data Collection Strategy: Use of Force &amp; Strip Searches in 2020&quot; (<a target="_blank" href="https://www.tps.ca/media/filer_public/a8/f2/a8f2b43f-5b3b-45c2-8b22-f2a354ce86bc/11c3e99a-ca38-4bc6-b204-b3f6b80483db.pdf">Go to information source - PDF</a>) and acknowledged disproportionate &#39;enforcement actions&#39; against minority groups and the impact these actions have had.</p>

      <p>The TPS issued an apology to various communities, but it has not been accepted by many activists and community members (<a target="_blank" href="https://toronto.citynews.ca/2022/06/15/toronto-police-chief-james-ramer-race-based-data-black-people/">Go to information source 1</a> and <a target="_blank" href="https://www.cbc.ca/news/canada/toronto/toronto-police-race-statistics-apology-community-response-1.6489688">source 2</a>). </p>

      <h4 id="toc_9">Homeless Encampment Actions</h4>

      <p>The City of Toronto and the Toronto Police Services has been criticized for their actions in the removal of homeless encampments from city parks (<a target="_blank" href="https://www.cbc.ca/news/canada/toronto/encampment-clearing-clarence-square-park-1.6486172">Go to information source</a>).</p>

      <h4 id="toc_10">Police Reform</h3>

      <p>The City has acknowledged systemic discrimination within Toronto and the mistrust racialized communities have for the Toronto Police Service (<a target="_blank" href="https://www.toronto.ca/community-people/get-involved/community/policing-reform/">Go to information source</a>). </p>

      <p>Toronto City Council adopted decisions related to policing in 2020 (<a target="_blank" href="http://app.toronto.ca/tmmis/viewAgendaItemHistory.do?item=2020.CC22.2">Go to information source</a>). This includes the need for police reform to ensure public safety for all Toronto residents. </p>

      <p>The Toronto Police Services Board released a list of reforms recommendations in 2020. (<a target="_blank" href="https://tpsb.ca/consultations-and-publications/policing-reform-implementation">Go to information source</a>).</p>
    `,
    img: 'https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-city-services.png?alt=media&token=5c89cbfc-005f-4ca6-9c9a-df795f85213b',
    featured: true,
  },
]
