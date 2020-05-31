# NASA 2020 Challenge
## High-level summary of the project
Our project uses data from various sources (NASA satellite measurements, EU social and economic data, GitHub COVID-19 data, Kaggle UN countries economic & social data) to try to understand if there are correlations and interdependencies between energy sectors development, pollution, transportation, various development indicators, unemployment, incidence and dynamics of COVID-19 cases. We focused on European countries. Data is ingested, processed, analyzed, filtered, and finally displayed in an easy to use for people interested to understand specifics of economic impact of COVID-19 in the context of each country.

## How the project addresses the challenge
We processed the satellite measurements data for CO2 and SO2. The data was filtered and registered on country boundaries to obtain estimates for pollution values over these countries – monthly. COVID-19 daily data was processed to obtain the evolution of active vs. recovered cases/country and calculate as well aggregated values. We explored unemployment, transportation, energy production and consumption data from EU sources, filtering and aggregating on months. UN Data statistics per country were processed to extract simple features from composed ones. Pollution (from NASA satellite measurements data), transportation, energy, industrial, and economic and social indicators (from EU and Kaggle sources) correlation with COVID-19 data was checked and explained. We were aiming initially to offer insights to the end user of our app on importance of some of factors in influencing other.  

## Project development
We took initially this challenge aiming to understand if there are correlations between economic development, quality of life, general social factors and incidence and evolution of COVID-19. We started by analysis of the data sources, identifying rich and complementary datasets. From NASA we took especially satellite data, and we registered the geographical measured values on European countries. We used Python as the main analysis and coding language, with Jupyter Notebooks for analysis, running it with Anaconda. The app ingests the pre-processed data and prepare it to be displayed in the UI. The backend of the app is as well developed in Python, with the UI being developed in Angular. Our initial assumptions were partially invalidated by the data analysis process.

## Solution demonstration
See the presentation materials associated with the project.

 
## Code
https://github.com/gabrielpreda/nasa_2020


## References
Data from multiple sources (see below) was used.
### NASA Data

#### SO2
 
MERRA-2 tavgM_2d_chm_Nx: 2d,Monthly mean,Time-Averaged,Single-Level,Assimilation,Carbon Monoxide and Ozone Diagnostics 0.625 x 0.5 degree V5.12.4 (M2TMNXCHM) at GES DISC  
https://search.earthdata.nasa.gov/search/granules/collection-details?p=C1276812852-GES_DISC&gdf=NetCDF!NetCDF4&fs10=Carbon%20Monoxide&fsm0=Air%20Quality&fst0=Atmosphere  

#### C02

MERRA-2 tavgM_2d_aer_Nx: 2d,Monthly mean,Time-averaged,Single-Level,Assimilation,Aerosol Diagnostics 0.625 x 0.5 degree V5.12.4 (M2TMNXAER) at GES DISC  
https://search.earthdata.nasa.gov/search/granules?p=C1276812866-GES_DISC&gdf=NetCDF!NetCDF4&tl=1575130169!4!!&fs10=Sulfur%20Oxides&fsm0=Air%20Quality&fst0=Atmosphere  

extracted)  
https://github.com/gabrielpreda/nasa_2020/tree/master/data/earthdata-merra2-co

### EU Europa Data
https://github.com/gabrielpreda/nasa_2020/tree/master/data/energy
https://github.com/gabrielpreda/nasa_2020/tree/master/data/transport%20data

### Kaggle Data
https://www.kaggle.com/sudalairajkumar/undata-country-profiles
Energy consumption, sustainable energy. Recently updated data. Original source: https://www.kaggle.com/natashalondon/sustainable-energy-for-all 

### COVID-19 Data
https://github.com/gabrielpreda/Kaggle/tree/master/covid-19-db
https://github.com/CSSEGISandData/COVID-19

## Tags
“ #Socio-economic impact, #Environmental impact, #COVID-19, 
#European countries, #cross-Industry view, #EU, #Holistic View, 
#Industry Impact, #NASA earth observation data, #An integrated assessment ”
