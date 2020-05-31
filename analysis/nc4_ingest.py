import os
import numpy as np
from netCDF4 import Dataset

country_list = [[47.516231, 14.550072, 'Austria'],
                [42.733883, 25.48583, 'Bulgaria'],
                ['35.126413', '33.429859', 'Cyprus'],
                ['49.817492', '15.472962', 'Czech Republic'],
                ['58.595272', '25.013607', 'Estonia'],
                ['46.227638', '2.213749', 'France'],
                ['51.165691', '10.451526', 'Germany'],
                ['39.074208', '21.824312', 'Greece'],
                ['47.162494', '19.503304', 'Hungary'],
                ['56.879635', '24.603189', 'Latvia'],
                ['55.169438', '23.881275', 'Lithuania'],
                ['49.815273', '6.129583', 'Luxembourg'],
                ['35.937496', '14.375416', 'Malta'],
                ['52.132633', '5.291266', 'Netherlands'],
                ['51.919438', '19.145136', 'Poland'],
                ['39.399872', '-8.224454', 'Portugal'],
                ['45.943161', '24.96676', 'Romania'],
                ['48.669026', '19.699024', 'Slovakia'],
                ['46.151241', '14.995463', 'Slovenia'],
                ['40.463667', '-3.74922', 'Spain'],
                ['60.128161', '18.643501', 'Sweden'],
                ['53.41291', '-8.24389', 'Ireland'],
                ['41.87194', '12.56738', 'Italy'],
                ['56.26392', '9.501785', 'Denmark'],
                ['61.92411', '25.748151', 'Finland'],
                [50.503887, 4.469936, 'Belgium'],
                ['45.1', '15.2', 'Croatia']]

path_to_files = r'C:\Users\agugila\OneDrive - ENDAVA\Desktop\Nasa\MERRA2SO2'
final_results = []
header = ["Country", "Date"]

for file_name in os.listdir(path_to_files):
    file_path = os.path.join(path_to_files, file_name)
    dataSet = Dataset(file_path, 'r')
    lon = dataSet.variables['lon']
    lat = dataSet.variables['lat']
    lon_array = lon[:]
    lat_array = lat[:]
    period = file_name.split(".")[-2]
    for country in country_list:
        intermediar_list = []
        for variable_name in dataSet.variables.keys():
            if variable_name not in ['lon', 'lat', 'time']:
                itm = dataSet.variables[variable_name]
                i = np.abs(lon_array - float(country[1])).argmin()
                j = np.abs(lat_array - float(country[0])).argmin()
                itm_value = itm[:, j, i]
                intermediar_list.extend([itm_value.data[0]])
        final_list = [country[-1], period]
        final_list.extend(intermediar_list)
        final_results.append(final_list)
else:
    print("file-path = ", file_path)
    dataSet = Dataset(file_path, 'r')
    headDS = list(dataSet.variables.keys())
    for column in list(dataSet.variables.keys()):
        if column not in ["lat", "lon", "time"]:
            header.append(column)

final_results.insert(0, header)
for x in final_results:
    print(x)
