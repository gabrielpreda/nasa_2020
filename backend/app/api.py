from flask import Flask, Response
from app.service import DataService
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
ds = DataService()


@app.route('/')
def hello():
    return "<h1>NASA COVID-19 backend</h1>"


@app.route('/covid/<interval>')
def get_covid_timeseries(interval):
    return Response(ds.get_covid_by_interval(interval), mimetype='application/json')


@app.route('/covid')
def get_covid_data():
    return Response(ds.get_covid_data(), mimetype='application/json')


@app.route('/crude-oil')
def get_crude_oil():
    return Response(ds.get_energy_crude_oil(), mimetype='application/json')


@app.route('/transport')
def get_transport_data():
    return ds.get_transport_data()


@app.route('/covid-agg/<country>')
def get_covid_un_agg(country):
    return Response(ds.get_covid_un_aggregated(country), mimetype='application/json')





