# Velocity API

API находится api.velocity.pro

<h3>GET /routes</h3>
Все маршруты, которые есть на Velocity 

GET /routes/:id 
Конкретный маршрут по его ID

POST /routes 
Параметры: 
  authorID: string
  // ID автора маршрута
  
  title: string
  // Заголовок маршрута
  
  description: JSON
  // Полное описание маршрута: [ tags, text, startPointName, endPointName, distance, duration, climb, level ]
  
  type: string
  // Тип маршрута (город, деревня и тд)
  
  waypoints: JSON
  // Точки по которым строится маршрут на карте: [ startPoint {name, lon, lat}, endPoint {name, lon, lat}, waypoint1 {name, lon, lat} ]
  
  comments: JSON
  // Код disqus
  
  likes: string
  // Количество лайков
  
  ridesCounter: string
  // Счетчик людей, которые катались по данному маршруту
  
  views: string
  // Количество просмотров
  
  relatedRoutes: JSON
  // ID похожих маршрутов
  
  status: string
  // Статус маршрута (одобрен, забанен...)
  
  GUID: string
  // Абсолютная ссылка на маршрут

