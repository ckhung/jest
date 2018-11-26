/* global $ */

var dtConfig = {
  'paging': false,
  'autoWidth': false,
  'table-layout': 'fixed',
  'fixedHeader': true,
  'columnDefs': [
    // https://github.com/rstudio/DT/issues/354
    {
      'orderSequence': ['desc', 'asc'],
      'targets': '_all'
    },
    {
     'searchable': false,
     'orderable': false,
     'targets': 0
    }
  ],
};

// https://datatables.net/examples/api/counter_columns.html
var jesp = $('#jesp_table');
jesp = jesp.DataTable(dtConfig);

jesp.on( 'order.dt search.dt', function () {
  jesp.column(0, {search:'applied', order:'applied'}).
    nodes().each( function (cell, i) {
      cell.innerHTML = i+1;
    } );
  } ).draw();

