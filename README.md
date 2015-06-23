# Velocity API

API находится api.velocity.pro

GET /routes
Все маршруты, которые есть на Velocity 

GET /routes/:id 
Конкретный маршрут по его ID

POST /routes 
Параметры: 
  0. authorID: string
  // ID автора маршрута
  
  0.title: string
  // Заголовок маршрута
  
  0.description: JSON
  // Полное описание маршрута: [ tags, text, startPointName, endPointName, distance, duration, climb, level ]
  
  0.type: string
  // Тип маршрута (город, деревня и тд)
  
  0.waypoints: JSON
  // Точки по которым строится маршрут на карте: [ startPoint {name, lon, lat}, endPoint {name, lon, lat}, waypoint1 {name, lon, lat} ]
  
  0.comments: JSON
  // Код disqus
  
  0.likes: string
  // Количество лайков
  
  0.ridesCounter: string
  // Счетчик людей, которые катались по данному маршруту
  
  0.views: string
  // Количество просмотров
  
  0.relatedRoutes: JSON
  // ID похожих маршрутов
  
  0.status: string
  // Статус маршрута (одобрен, забанен...)
  
  0.GUID: string
  // Абсолютная ссылка на маршрут

