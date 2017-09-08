import React from "react";

const Main = () =>
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br></br>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" class="form-control" id="search-term"></input>
                  </div>
                  <div className="form-group">
                    <label for="pwd">Number of Records to Retrieve:</label>
                    <select className="form-control" id="num-records-select">
                  <option value="1">1</option>
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                </select>
                  </div>
                  <div className="form-group">
                    <label for="start-year">Start Year (Optional):</label>
                    <input type="text" class="form-control" id="start-year"></input>
                  </div>
                  <div className="form-group">
                    <label for="end-year">End Year (Optional):</label>
                    <input type="text" class="form-control" id="end-year"></input>
                  </div>
                  <button type="submit" class="btn btn-default" id="run-search"><i class="fa fa-search"></i> Search</button>
                  <button type="button" class="btn btn-default" id="clear-all"><i class="fa fa-trash"></i> Clear Results</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;

export default Main;


