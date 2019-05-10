VERSION 5.00
Begin VB.Form Form1 
   BorderStyle     =   1  'Fixed Single
   Caption         =   "NEIE Assistant"
   ClientHeight    =   2580
   ClientLeft      =   30
   ClientTop       =   360
   ClientWidth     =   2925
   Icon            =   "Form1.frx":0000
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   ScaleHeight     =   2580
   ScaleWidth      =   2925
   StartUpPosition =   3  '窗口缺省
   Begin VB.Timer Timer1 
      Enabled         =   0   'False
      Interval        =   1000
      Left            =   3720
      Top             =   600
   End
   Begin VB.CommandButton Command2 
      Caption         =   "设置"
      Height          =   384
      Left            =   240
      TabIndex        =   9
      Top             =   2160
      Width           =   972
   End
   Begin VB.TextBox Text4 
      Height          =   264
      IMEMode         =   3  'DISABLE
      Left            =   920
      MaxLength       =   20
      PasswordChar    =   "*"
      TabIndex        =   8
      Top             =   1560
      Width           =   1932
   End
   Begin VB.TextBox Text3 
      Height          =   264
      Left            =   920
      MaxLength       =   20
      TabIndex        =   6
      Top             =   1080
      Width           =   1932
   End
   Begin VB.ComboBox Combo1 
      Height          =   276
      ItemData        =   "Form1.frx":030A
      Left            =   920
      List            =   "Form1.frx":030C
      Style           =   2  'Dropdown List
      TabIndex        =   4
      Top             =   600
      Width           =   1932
   End
   Begin VB.TextBox Text2 
      Height          =   264
      Left            =   920
      MaxLength       =   255
      TabIndex        =   1
      Top             =   228
      Width           =   1932
   End
   Begin VB.CommandButton Command1 
      Caption         =   "开始"
      Height          =   384
      Left            =   1800
      TabIndex        =   0
      Top             =   2160
      Width           =   972
   End
   Begin VB.Label Label6 
      AutoSize        =   -1  'True
      Caption         =   "Status:"
      Height          =   180
      Left            =   120
      TabIndex        =   11
      Top             =   1920
      Width           =   672
   End
   Begin VB.Label Label5 
      AutoSize        =   -1  'True
      Caption         =   "Label5"
      BeginProperty Font 
         Name            =   "宋体"
         Size            =   7.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H8000000D&
      Height          =   156
      Left            =   920
      TabIndex        =   10
      Top             =   1920
      Width           =   504
   End
   Begin VB.Label Label4 
      AutoSize        =   -1  'True
      Caption         =   "Password:"
      Height          =   180
      Left            =   0
      TabIndex        =   7
      Top             =   1560
      Width           =   864
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      Caption         =   "User:"
      Height          =   180
      Left            =   240
      TabIndex        =   5
      Top             =   1080
      Width           =   480
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      Caption         =   "Level:"
      Height          =   180
      Left            =   240
      TabIndex        =   3
      Top             =   600
      Width           =   576
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      Caption         =   "IP:"
      Height          =   180
      Left            =   360
      TabIndex        =   2
      Top             =   240
      Width           =   288
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Option Explicit

Dim TimeCount As Long

Private Sub Combo1_Click()
    LevelID = CLng(Combo1.Text)
End Sub

Private Sub Command2_Click()
    Form3.Show
End Sub

Private Sub Form_Load()

    Call Init
    
    Label5.Caption = "Initialization completed"
    
End Sub

Private Sub Login()
Dim pStr As String
    PName(0) = "UserName"
    PVal(0) = UserName
    PName(1) = "Password"
    PVal(1) = PassWord
    PName(2) = "Version"
    PVal(2) = "4.0"
    PName(3) = "LevelID"
    PVal(3) = LevelID
    PNeedEncode(0) = True
    PNeedEncode(1) = True
    PNeedEncode(2) = True
    PNeedEncode(3) = True
    pStr = SoapPost("LoginListening", 4)
    
    On Error Resume Next
    UserID = GetPara(pStr, "UserID")
    UserNumber = GetPara(pStr, "UserNumber")
End Sub

Function GetStatus(pStr As String)
Dim TmpStr As String

    TmpStr = Mid(pStr, 2, 1)
    
    If TmpStr = "E" Then
        GetStatus = "Level Test"
    ElseIf TmpStr = "F" Then
        GetStatus = "SectionA"
    ElseIf TmpStr = "G" Then
        GetStatus = "SectionB"
    ElseIf TmpStr = "H" Then
        GetStatus = "SectionC"
    ElseIf TmpStr = "A" Then
        GetStatus = "Unit10"
    ElseIf TmpStr = "B" Then
        GetStatus = "Unit11"
    ElseIf TmpStr = "C" Then
        GetStatus = "Unit12"
    ElseIf TmpStr = "D" Then
        GetStatus = "Unit13"
    Else
        GetStatus = "Unit" & TmpStr
    End If
    
    GetStatus = GetSortID(pStr) & "-" & GetStatus & "-" & Mid(pStr, 3)
    
End Function


Private Sub Command1_Click()
Dim pStr As String

    If Command1.Caption = "停止" Then
        
        Call UnLockAll
        
        Timer1.Enabled = False
        
        Label5.Caption = "Initialization completed"
        
        Exit Sub
        
    End If
    
    Call LockAll
    
    Label5.Caption = "Connecting to server..."
    
    pStr = HttpGet("http://" & IP & "/WebService/ServiceV3.asmx?WSDL")
    
    If Len(pStr) = 0 Or InStr(pStr, "LoginListeningResponse") <= 0 Then
        
        MsgBox "IP地址错误 或者 网络出现问题", vbCritical, "提示"
        
        Call UnLockAll
        
        Timer1.Enabled = False
        
        Label5.Caption = "Initialization completed"
        
        Exit Sub
    End If
    
    Label5.Caption = "logging in..."
    
    PName(0) = "UserName"
    PVal(0) = UserName
    PName(1) = "Password"
    PVal(1) = PassWord
    PName(2) = "Version"
    PVal(2) = "4.0"
    PName(3) = "LevelID"
    PVal(3) = LevelID
    PNeedEncode(0) = True
    PNeedEncode(1) = True
    PNeedEncode(2) = True
    PNeedEncode(3) = True
    pStr = SoapPost("LoginListening", 4)
    
    On Error Resume Next
    UserID = GetPara(pStr, "UserID")
    UserNumber = GetPara(pStr, "UserNumber")
    
    If GetPara(pStr, "LoginListeningResult") <> 2 Then '登录异常
        
        If GetPara(pStr, "LoginListeningResult") = 0 Then '未激活
            
            Form2.Show
            
            Call UnLockAll
            
            Timer1.Enabled = False
            
            Label5.Caption = "Waitting for Activation"
            
            Exit Sub
        Else
            
            MsgBox GetPara(pStr, "ReturnMessage"), , "登录失败"
            
            Call UnLockAll
            
            Timer1.Enabled = False
            
            Label5.Caption = "Initialization completed"
            
            Exit Sub
        
        End If
        
    Else  '登录成功
    
        Randomize
        
        TimeCount = Int(Rnd * (mxTime - mnTime + 1)) + mnTime
        
        Label5.Caption = "GetListeningProgress..."
    
        PName(0) = "UserID"
        PVal(0) = UserID
        PName(1) = "LevelID"
        PVal(1) = LevelID
        PNeedEncode(0) = False
        PNeedEncode(1) = False
        pStr = SoapPost("GetListeningProgress", 2)
        
        GetListeningProgressResult = GetPara(pStr, "GetListeningProgressResult", False)
        SectionID = GetPara(pStr, "SectionID", False)
        SubSectionID = GetPara(pStr, "SubSectionID", False)
        UnitID = GetPara(pStr, "UnitID", False)
        
        If GetListeningProgressResult = "1" Then
        
            SectionID = GetNextSection(SectionID)
            
            If Mid(SectionID, 2, 1) <> UnitID Then  '刷完一个单元
        
                PName(0) = "UserID"
                PVal(0) = UserID
                PName(1) = "LevelID"
                PVal(1) = LevelID
                PName(2) = "UnitID"
                PVal(2) = UnitID
                PName(3) = "Status"
                PVal(3) = "1"
                PNeedEncode(0) = True
                PNeedEncode(1) = True
                PNeedEncode(2) = True
                PNeedEncode(3) = True
                SoapPost "SetListeningUnitLearnStaus", 4
                
                UnitID = Mid(SectionID, 2, 1)
                
                If SectionID = "已经刷完了！！！" Then
                
                    Label5.Caption = SectionID
                
                    Call UnLockAll
                    
                    Timer1.Enabled = False
                    
                    Exit Sub
                End If
                
            End If
        End If
        
        If SectionID = "" Then SectionID = LevelID & UnitID & "11"
        If SubSectionID = "" Then SubSectionID = "0"
        
        pStr = SoapPost("GetServerTime", 0)
        BeginTime = GetPara(pStr, "GetServerTimeResult", False)


    
        Timer1.Enabled = True
        
    End If

End Sub

Private Sub Text4_KeyPress(KeyAscii As Integer)
    If KeyAscii = 13 Then Call Command1_Click
End Sub

Private Sub Timer1_Timer()
Dim pStr As String, Score As Double, Num As Long, NumTmp As Integer, Errcode As Integer
    
    Errcode = 0
    
    If TimeCount Then
        
        TimeCount = TimeCount - 1
        
        Label5.Caption = TimeCount & "秒后完成 " & GetStatus(SectionID)
        
        Exit Sub
    
    End If
    
    Num = GetProblemNum(SectionID)
    
    If Num = 0 Then
        Score = 0
    Else
        Randomize
        
        Do
            NumTmp = Int(Rnd * Num) + 1
        Loop Until (NumTmp / Num >= mnScore / 100)
        
        Score = Round(NumTmp * 100 / Num, 1)
        
    End If
S1:

    PName(0) = "UserID"
    PVal(0) = UserID
    PName(1) = "UserNumber"
    PVal(1) = UserNumber
    PName(2) = "SectionID"
    PVal(2) = SectionID
    PName(3) = "SubSectionID"
    PVal(3) = SubSectionID
    PName(4) = "Response"
    PVal(4) = ""
    PName(5) = "Score"
    PVal(5) = Score
    PName(6) = "IsSaveResponse"
    PVal(6) = "0"
    PName(7) = "IsCompleted"
    PVal(7) = "1"
    PName(8) = "BeginTime"
    PVal(8) = BeginTime
    PNeedEncode(0) = True
    PNeedEncode(1) = True
    PNeedEncode(2) = True
    PNeedEncode(3) = True
    PNeedEncode(4) = False
    PNeedEncode(5) = True
    PNeedEncode(6) = True
    PNeedEncode(7) = True
    PNeedEncode(8) = True
    pStr = SoapPost("SetListeningResponseInformation", 9)
    
    If GetPara(pStr, "SetListeningResponseInformationResult") <> 1 Then '完成题目失败
    
        If Errcode = 0 Then
            
            Errcode = 1
            
            Call Login
            
            GoTo S1
        Else
            MsgBox "score=" & Score & " sec=" & SectionID, vbCritical, "完成题目失败"
            
            Call UnLockAll
            
            Timer1.Enabled = False
            
            Label5.Caption = "Something Error"
            
            Exit Sub
        End If
        
    End If
    
    Randomize
    
    TimeCount = Int(Rnd * (mxTime - mnTime + 1)) + mnTime
    
    
    SectionID = GetNextSection(SectionID)
    
    If Mid(SectionID, 2, 1) <> UnitID Then  '刷完一个单元

        PName(0) = "UserID"
        PVal(0) = UserID
        PName(1) = "LevelID"
        PVal(1) = LevelID
        PName(2) = "UnitID"
        PVal(2) = UnitID
        PName(3) = "Status"
        PVal(3) = "1"
        PNeedEncode(0) = True
        PNeedEncode(1) = True
        PNeedEncode(2) = True
        PNeedEncode(3) = True
        SoapPost "SetListeningUnitLearnStaus", 4
        
        UnitID = Mid(SectionID, 2, 1)
        
        'MsgBox UnitID
        
        If SectionID = "已经刷完了！！！" Then
        
            Label5.Caption = SectionID
        
            Call UnLockAll
            
            Timer1.Enabled = False
            
            Exit Sub
        End If
        
    End If
    
    pStr = SoapPost("GetServerTime", 0)
    BeginTime = GetPara(pStr, "GetServerTimeResult", False)
    
    SubSectionID = "0"
    
    Label5.Caption = TimeCount & "秒后完成 " & GetStatus(SectionID)
    
    PName(0) = "UserID"
    PVal(0) = UserID
    PName(1) = "UserNumber"
    PVal(1) = UserNumber
    PName(2) = "SectionID"
    PVal(2) = SectionID
    PName(3) = "SubSectionID"
    PVal(3) = SubSectionID
    PName(4) = "Response"
    PVal(4) = ""
    PName(5) = "Score"
    PVal(5) = "0"
    PName(6) = "IsSaveResponse"
    PVal(6) = "0"
    PName(7) = "IsCompleted"
    PVal(7) = "0"
    PName(8) = "BeginTime"
    PVal(8) = BeginTime
    PNeedEncode(0) = True
    PNeedEncode(1) = True
    PNeedEncode(2) = True
    PNeedEncode(3) = True
    PNeedEncode(4) = False
    PNeedEncode(5) = True
    PNeedEncode(6) = True
    PNeedEncode(7) = True
    PNeedEncode(8) = True
    pStr = SoapPost("SetListeningResponseInformation", 9)
    
End Sub


Private Sub Form_Unload(Cancel As Integer)
    
    Open "C:\Windows\DMC_Faith_NEIE" For Output As #1

        Print #1, IP
        Print #1, Trim(LevelID)
        Print #1, UserName
        Print #1, PassWord
        Print #1, mnScore
        Print #1, mnTime
        Print #1, mxTime
        
    Close #1
    
    End

End Sub

Private Sub Text2_Change()
    IP = Text2.Text
End Sub

Private Sub Text3_Change()
    UserName = Text3.Text
End Sub

Private Sub Text4_Change()
    PassWord = Text4.Text
End Sub

