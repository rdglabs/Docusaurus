---
slug: PS-ImportExcel
title: ImportExcel Powershell Module 
authors: [gillespr]
tags: [powershell,importexcel,AD]
---

# Powershell ImportExcel
If you have worked with data in powershell you have most likely used the command `export-csv`. This is a great built in command to get the data out of the console and in a file to work with or share. I use `export-csv` a lot on AD queries, building computer reports or just need to view and sort some data quickly. 
<!-- truncate -->
I started using `export-csv` in a lot of my script that where setup with a task scheduler and then send those csv file out as reports. Most of the time these reports would be just for myself. After having one of my report containing M365 license count by site and region was being used by everyone, I had a coworker made a joke about making the report "fancier" since it had made its way up to managers level. I knew about the module `importexcel` but never bothered try working with it. It is a game changer to creating reports. You can create tables, graphs and do a lot by calling teh excel object functions. 

## Getting Started
First thing to do with any powershell module is to install [importexcel](https://github.com/dfinke/ImportExcel)
```powershell
Install-Module -Name ImportExcel
```
if you are going to use this module on an automated script it would be best to install system wide
```powershell
Install-Module -Name ImportExcel -Scope AllUsers
```
A good thing to do with any new module it to see what commands it has that you can use.
```powershell
get-command -module ImportExcel
```
This can will return a list of all `ImportExcel` commands
<div class="scrollable-code">
```powershell showLineNumbers
CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           Convert-XlRangeToImage                             7.8.10     importexcel
Alias           Export-ExcelSheet                                  7.8.10     importexcel
Alias           New-ExcelChart                                     7.8.10     importexcel
Alias           Set-Column                                         7.8.10     importexcel
Alias           Set-Format                                         7.8.10     importexcel
Alias           Set-Row                                            7.8.10     importexcel
Alias           Use-ExcelData                                      7.8.10     importexcel
Function        Add-ConditionalFormatting                          7.8.10     importexcel
Function        Add-ExcelChart                                     7.8.10     importexcel
Function        Add-ExcelDataValidationRule                        7.8.10     importexcel
Function        Add-ExcelName                                      7.8.10     importexcel
Function        Add-ExcelTable                                     7.8.10     importexcel
Function        Add-PivotTable                                     7.8.10     importexcel
Function        Add-Worksheet                                      7.8.10     importexcel
Function        BarChart                                           7.8.10     importexcel
Function        Close-ExcelPackage                                 7.8.10     importexcel
Function        ColumnChart                                        7.8.10     importexcel
Function        Compare-Worksheet                                  7.8.10     importexcel
Function        Convert-ExcelRangeToImage                          7.8.10     importexcel
Function        ConvertFrom-ExcelData                              7.8.10     importexcel
Function        ConvertFrom-ExcelSheet                             7.8.10     importexcel
Function        ConvertFrom-ExcelToSQLInsert                       7.8.10     importexcel
Function        ConvertTo-ExcelXlsx                                7.8.10     importexcel
Function        Copy-ExcelWorksheet                                7.8.10     importexcel
Function        DoChart                                            7.8.10     importexcel
Function        Enable-ExcelAutoFilter                             7.8.10     importexcel
Function        Enable-ExcelAutofit                                7.8.10     importexcel
Function        Expand-NumberFormat                                7.8.10     importexcel
Function        Export-Excel                                       7.8.10     importexcel
Function        Get-ExcelColumnName                                7.8.10     importexcel
Function        Get-ExcelFileSchema                                7.8.10     importexcel
Function        Get-ExcelFileSummary                               7.8.10     importexcel
Function        Get-ExcelSheetDimensionAddress                     7.8.10     importexcel
Function        Get-ExcelSheetInfo                                 7.8.10     importexcel
Function        Get-ExcelWorkbookInfo                              7.8.10     importexcel
Function        Get-HtmlTable                                      7.8.10     importexcel
Function        Get-Range                                          7.8.10     importexcel
Function        Get-XYRange                                        7.8.10     importexcel
Function        Import-Excel                                       7.8.10     importexcel
Function        Import-Html                                        7.8.10     importexcel
Function        Import-UPS                                         7.8.10     importexcel
Function        Import-USPS                                        7.8.10     importexcel
Function        Invoke-ExcelQuery                                  7.8.10     importexcel
Function        Invoke-Sum                                         7.8.10     importexcel
Function        Join-Worksheet                                     7.8.10     importexcel
Function        LineChart                                          7.8.10     importexcel
Function        Merge-MultipleSheets                               7.8.10     importexcel
Function        Merge-Worksheet                                    7.8.10     importexcel
Function        New-ConditionalFormattingIconSet                   7.8.10     importexcel
Function        New-ConditionalText                                7.8.10     importexcel
Function        New-ExcelChartDefinition                           7.8.10     importexcel
Function        New-ExcelStyle                                     7.8.10     importexcel
Function        New-PivotTableDefinition                           7.8.10     importexcel
Function        New-Plot                                           7.8.10     importexcel
Function        New-PSItem                                         7.8.10     importexcel
Function        Open-ExcelPackage                                  7.8.10     importexcel
Function        PieChart                                           7.8.10     importexcel
Function        Pivot                                              7.8.10     importexcel
Function        Read-Clipboard                                     7.8.10     importexcel
Function        Read-OleDbData                                     7.8.10     importexcel
Function        ReadClipboardImpl                                  7.8.10     importexcel
Function        Remove-Worksheet                                   7.8.10     importexcel
Function        Select-Worksheet                                   7.8.10     importexcel
Function        Send-SQLDataToExcel                                7.8.10     importexcel
Function        Set-CellComment                                    7.8.10     importexcel
Function        Set-CellStyle                                      7.8.10     importexcel
Function        Set-ExcelColumn                                    7.8.10     importexcel
Function        Set-ExcelRange                                     7.8.10     importexcel
Function        Set-ExcelRow                                       7.8.10     importexcel
Function        Set-WorksheetProtection                            7.8.10     importexcel
Function        Test-Boolean                                       7.8.10     importexcel
Function        Test-Date                                          7.8.10     importexcel
Function        Test-Integer                                       7.8.10     importexcel
Function        Test-Number                                        7.8.10     importexcel
Function        Test-String                                        7.8.10     importexcel
Function        Update-FirstObjectProperties                       7.8.10     importexcel
```
</div><br/><br/>

We wont be going though all these command on this article. The first one we will talk about is `export-excel`

### Export-Excel
let say you are trying to build a report of users grouped by department, and region. 


```powershell
$user = get-aduser -filter * -properties * | select-object Name, Department, Office, State

$departments = $user | Group-Object -Property Department | Select-Object count, Name
$location = $user | Group-Object -Property Location | Select-Object count, Name

#This will give two table
$departments

Count Name
----- ----
    2 Engineering
    2 Finance
    2 HR
    2 IT
    1 Legal
    2 Marketing
    1 Operations
    2 Sales

$location

Count Name
----- ----
    3 Chicago
    3 LA
    4 NYC
    4 SF
```



