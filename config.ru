use Rack::Static, :urls => [""], :root => 'public', :index => 'index.html',
  :header_rules => [
    [:all, {'Access-Control-Allow-Origin' => '*'}]
  ]

run lambda { |env| }
