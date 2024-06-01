CRONBRO

Cronbro is a CLI tool for quickly creating schedule for cronjobs.

What it does?

This tool can quickly convert time in timezone to GMT and create a schedule for that time based on user inputs. 

Written in NodeJS(ES modules).
Packages used:
       -   yargs
       -   inquirer 

Prompts
1. Select the type of schedule for your cronjob
-	Run at a specific time
-	Run multiple times within a range of time

User selects Run at a specific time

2. Select your time zone 
3. Specify the time cronjob should run 
4. Enter Year
5. Select Month
6. Enter Year

User selects *Run multiple times within a range of time*

2. Select your time zone 
3. Your cronjob should run from (eg: 3:30 AM)
4. Your cronjob should run till (eg: 4:30 AM)
5. Enter frequency in minutes 

After user answers all the questions, the tool will output the schedule which can directly be used in crontab.



