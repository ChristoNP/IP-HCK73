# Individual Projects

# Sky Gata Indonesia API Documentation

## Endpoints:

### List of available endpoints:

### User
- `POST /login`
- `POST /register`
- `POST /auth/google`

### Routes below need authentication:

### Airports & Review
- `GET /airports`
- `GET /airports/:airportCode`
- `POST /airports/:airportCode/chatbot`
- `POST /airports/:airportCode/reviews`

### Routes below need authorization:

- `PUT /airports/:airportCode/reviews/:id`
- `DELETE /airports/:airportCode/reviews/:id`

&nbsp;

# User

## 1. POST /register

##### Description:

- Register a new user into the system

#### Request:

- #### headers:
  ```json
  {
    "Authorization": "Bearer <access_token>"
  }
  ```

- #### body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- #### Response (201 - Created)
  ```json
  {
      "id": "number",
      "email": "string"
  }
  ```
- #### Response (400 - Bad Request)
  ```json
  {
    "message": "Email already exist"
  }
  ```
  **OR**
  ```json
  {
    "message": "Email format is invalid"
  }
  ```
  **OR**
  ```json
  {
    "message": "Email Required"
  }
  ```
  **OR**
  ```json
  {
    "message": "Password Required"
  }
  ```

- #### Response (403 - Forbidden)
  ```json
  {
    "message": "Forbidden"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

  &nbsp;

## 2. POST /login

##### Description:

- Login existed user into the system

#### Request:

- #### body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- #### Response (200 - OK)
  ```json
  {
    "access_token": "string"
  }
  ```
- #### Response (400 - Bad Request)

  ```json
  {
    "message": "Email format is invalid"
  }
  ```

  **OR**

  ```json
  {
    "message": "Email Required"
  }
  ```

  **OR**

  ```json
  {
    "message": "Email/Password is required"
  }
  ```

- #### Response (401 - Unauthorize)
  ```json
  {
    "message": "Invalid email/password"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## POST /auth/google

##### Description:

- Login using google account

#### Request:

- #### body:
  ```json
  {
    "googleToken": "string"
  }
  ```
- #### Response (200 - OK)
  ```json
  {
    "access_token": "string"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
&nbsp;

# Airport & Review

## 3. GET /airports

#### Description:

- Fetch Airport list

#### Request:

- #### headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- #### Response (200 - OK):
  ```json
  {
        "page": 1,
        "data": [
            {
                "id": 1,
                "airportCode": "62614ba25e9ded5710448f46",
                "name": "ABDUL RACHMAN AIRPORT",
                "country": "ID",
                "private": false,
                "iataCode": "MLG",
                "icaoCode": "WARA",
                "runway1": "17, 35",
                "runway2": "17L, 35R",
                "elevation": 526,
                "createdAt": "2024-08-09T02:38:23.344Z",
                "updatedAt": "2024-08-09T02:38:23.344Z"
            },
            ....,
        ],
        "totalData": 288,
        "totalPage": 29,
        "dataPerPage": 10
    }
  ```

- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## 4. GET /airports/:airportCode
#### Description:

- Fetch Airports Detail From Database

#### Request:

- #### headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- #### params:
  ```json
  {
    "airportCode": "number"
  }
  ```

- #### Response (200 - OK)
  ```json
  {
    "id": 1,
    "airportCode": "62614ba25e9ded5710448f46",
    "name": "ABDUL RACHMAN AIRPORT",
    "country": "ID",
    "private": false,
    "iataCode": "MLG",
    "icaoCode": "WARA",
    "runway1": "17, 35",
    "runway2": "17L, 35R",
    "elevation": 526,
    "createdAt": "2024-08-09T02:38:23.344Z",
    "updatedAt": "2024-08-09T02:38:23.344Z",
    "Reviews": [
            {
                "id": 2,
                "UserId": 1,
                "AirportId": 1,
                "rate": 7,
                "comment": "transportasi jauh",
                "createdAt": "2024-08-09T03:58:26.147Z",
                "updatedAt": "2024-08-09T03:58:26.147Z"
            }
        ]
    }
    ```
- #### Response (404 - Not Found)
  ```json
  {
    "message": "Airport not found"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## 5. POST /airports/:airportCode/chatbot
#### Description:

- Get Recommendation from OpenAI

#### Request:

- #### headers:
  ```json
  {
    "access_token": "string"
  }
  ```
- #### params:
  ```json
  {
    "airportCode": "number"
  }
  ```
- #### Response (200 - OK)
  ```json
    {
        "response": {
            "activities": {
                "airport": "Abdul Rachman Airport",
                "location": "Sumbawa, West Nusa Tenggara, Indonesia",
                "name": "Sumbawa Island Beach Activities",
                "description": "Explore the beautiful beaches of Sumbawa Island with activities such as surfing, snorkeling, and beach volleyball.",
                "distanceFromAirport": "30 km",
                "category": "Outdoor/Water Activities",
                "imageUrl": "https://example.com/sumbawa-beach.jpg"
            },
            "sightseeing": {
                "airport": "Abdul Rachman Airport",
                "location": "Sumbawa, West Nusa Tenggara, Indonesia",
                "name": "Nunggaran Hill",
                "description": "A scenic viewpoint that offers stunning panoramic vistas of the surrounding landscape and ocean.",
                "distanceFromAirport": "25 km",
                "category": "Natural Attractions",
                "imageUrl": "https://example.com/nunggaran-hill.jpg"
            },
            "accommodations": {
                "airport": "Abdul Rachman Airport",
                "location": "Sumbawa, West Nusa Tenggara, Indonesia",
                "name": "Sumbawa Beach Hotel",
                "description": "A beachfront hotel offering a variety of amenities including a pool, restaurant, and easy access to local attractions.",
                "distanceFromAirport": "28 km",
                "category": "Hotel",
                "imageUrl": "https://example.com/sumbawa-beach-hotel.jpg"
            }
        }
    }
  ```
- #### Response (404 - Not Found)
  ```json
  {
    "message": "Data not found"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```


## 6. POST /airports/:airportCode/reviews
#### Description:

- Add reviews to airport

#### Request:

- #### headers:
  ```json
  {
    "Authorization": "Bearer <access_token>"
  }
  ```
- #### params:
  ```json
  {
    "airportCode": "number"
  }
  ```
- #### body:
  ```json
  {
    "rate": "string",
    "comment": "string"
  }
  ```
- #### Response (201 - Created)
   ```json
  {
    "UserId": "number",
    "AirportId": "number",
    "rate": "string",
    "comment": "string"
  }
  ```
- #### Response (400 - Bad Request)
  ```json
  {
    "message": "rate required"
  }
  ```
  **OR**
  ```json
  {
    "message": "comment required"
  }
  ```
- #### Response (404 - Not Found)
  ```json
  {
    "message": "Airport not found"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## 7. PUT /airports/:airportCode/reviews/:id
#### Description:

- Edit airport review 

#### Request:

- #### headers:
  ```json
  {
    "Authorization": "Bearer <access_token>"
  }
  ```
- #### params:
  ```json
    {
        "airportCode": "number",
        "id": "number
    }
  ```
- #### body:
  ```json
  {
    "rate": "string",
    "comment": "string"
  }
  ```
- #### Response (201 - Created)
   ```json
  {
    "UserId": "number",
    "AirportId": "number",
    "rate": "string",
    "comment": "string"
  }
  ```
- #### Response (400 - Bad Request)
  ```json
  {
    "message": "rate required"
  }
  ```
  **OR**
  ```json
  {
    "message": "comment required"
  }
  ```
- #### Response (403 - Forbidden)
  ```json
  {
    "message": "Forbidden Access"
  }
  ```
- #### Response (404 - Not Found)
  ```json
  {
    "message": "Airport not found"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```

## 8. DELETE /airports/:airportCode/reviews/:id
#### Description:

- Delete reviews from detail airport

#### Request:

- #### headers:
  ```json
  {
    "Authorization": "Bearer <access_token>"
  }
  ```
- #### params:
  ```json
  {
    "airportCode": "number",
    "id": "number"
  }
  ```
- #### Response (200 - OK)
  ```json
  {
    "message": "Review has been deleted"
  }
  ```
  - #### Response (403 - Forbidden)
  ```json
  {
    "message": "Forbidden Access"
  }
  ```
- #### Response (404 - Not Found)
  ```json
  {
    "message": "Data not found"
  }
  ```
- #### Response (500 - Internal Server Error)
  ```json
  {
    "message": "Internal Server Error"
  }
  ```
&nbsp;