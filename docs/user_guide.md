# MHMP Front-End Dashboard User's Guide
This user guide contains a brief tutorial to get you started using the provided MHMP frontend dashboard. 

---

## Logging In and Account Creation

1. When first opening the application, you will be greeted with the login screen powered by Amazon Cognito. Please click **Create account** if you have not yet created one.

<img src="./images/user_guide/UserGuide-1.0.0.png"  width="400"/>

2. Please fill out the *Username* field with your email address. This is the username you will need to login. Fill out the rest of the form then click **CREATE ACCOUNT**.

<img src="./images/user_guide/UserGuide-1.0.1.png"  width="400"/>

3. You should then receive a verification code delivered to the email address you selected. Please note that it could take up to a few minutes to recieve this verification code. Once received, enter the verification code and click **CONFIRM**.

<img src="./images/user_guide/UserGuide-1.0.2.png"  width="400"/>

---

## UI
After logging in, the system will fetch required data from the backend after which you will be greeted with the dashboard's homepage. This page contains two tables. The top one containing alerts with details and a location finder. The bottom table contains a list of all users with real-time status updates and heart rates.  

<img src="./images/user_guide/UserGuide-2.0.0.png"  width="500"/>

### Alerts
Alerts can be dismissed by clicking on the actions tab and clicking **Marked As Resolved**. This not only deletes the alert, but it resets the user's status to normal. This is important because once a heart rate or location alert is received, no new alerts will be generated until the status of the user is cleared. 

<img src="./images/user_guide/UserGuide-2.0.3.png"  width="500"/>

A map view of the user's location at the time the alert was generated can be viewed by clicking **View** in an alert entry. 

<img src="./images/user_guide/UserGuide-2.0.2.png"  width="500"/>

Additionally, an alert notification will appear on the left sidebar. This sidebar is persistant on any page of the application so that the admin user can be notified of new alerts no matter where they are in the application.

<img src="./images/user_guide/UserGuide-2.0.4.png"  width="300"/>


#### Real-time Alert Subscription Status
The *Realtime Status* at the top of the dashboard indicates that the real-time alert system is functioning correctly if it is green and displays *Connected*. Disruptions such as an internet connection loss will result in the real-time alert system (subscription) being cancelled. This will be indicated by the *Realtime Status* displaying a red dot and a *Disconnected* message. Please check your internet connection and refresh the application to troubleshoot and re-establish the real-time connection.

<img src="./images/user_guide/UserGuide-2.0.1.png"  width="500"/>

---

## User Management
Clicking on the *Manage Users* button from the left-hand navigation bar will take you to the user management page.

<img src="./images/user_guide/UserGuide-3.0.0.png"  width="500"/>

