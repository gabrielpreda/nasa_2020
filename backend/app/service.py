import pandas as pd


class DataService:
    base_folder = 'csv/'

    @staticmethod
    def _load_csv(file, sep=','):
        return pd.read_csv(file, sep=sep)

    @staticmethod
    def _load_xlsx(file):
        return pd.read_excel(file)

    # https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide
    def get_covid_by_interval(self, interval):
        if interval == 'monthly':
            df = self._load_csv(self.base_folder + 'covid_monthly.csv')
        if interval == 'daily':
            df = self._load_csv(self.base_folder + 'covid_daily.csv')
        return df.to_json(orient='records', indent=4)

    def get_covid_data(self):
        df = self._load_csv(self.base_folder + 'covid_totals.csv')
        return df.to_json(orient='records', indent=4)

    def get_energy_crude_oil(self):
        df = self._load_csv(self.base_folder + 'energy_crude_oil.csv')
        return df.to_json(orient='records', indent=4)

    def get_energy_data(self):
        return self._load_csv(self.base_folder + 'energy.csv', sep=self.separator)

    def get_transport_data(self):
        return self._load_csv(self.base_folder + 'transport.csv', sep=self.separator)

    def get_covid_un_aggregated(self, country):
        df = self._load_csv(self.base_folder + 'covid_un_aggregated.csv')
        df = df[df['country'] == country]
        return df.to_json(orient='records', indent=4)



if __name__ == '__main__':
    ds = DataService()
    import pdb

    pdb.set_trace()
    df = ds.get_energy_crude_oil()


