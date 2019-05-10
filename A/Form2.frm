VERSION 5.00
Begin VB.Form Form2 
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "请先激活再使用"
   ClientHeight    =   3084
   ClientLeft      =   36
   ClientTop       =   360
   ClientWidth     =   3816
   Icon            =   "Form2.frx":0000
   LinkTopic       =   "Form2"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   3084
   ScaleWidth      =   3816
   ShowInTaskbar   =   0   'False
   StartUpPosition =   3  '窗口缺省
   Begin VB.CommandButton Command2 
      Caption         =   "激活"
      Height          =   384
      Left            =   2400
      TabIndex        =   8
      Top             =   2640
      Width           =   1212
   End
   Begin VB.CommandButton Command1 
      Caption         =   "获取激活码"
      Height          =   384
      Left            =   240
      TabIndex        =   6
      Top             =   2640
      Width           =   1092
   End
   Begin VB.TextBox Text3 
      Height          =   264
      Left            =   1080
      TabIndex        =   5
      Top             =   1440
      Width           =   2652
   End
   Begin VB.TextBox Text2 
      Height          =   264
      Left            =   1080
      TabIndex        =   4
      Top             =   840
      Width           =   2652
   End
   Begin VB.TextBox Text1 
      Height          =   264
      Left            =   1080
      TabIndex        =   3
      Top             =   240
      Width           =   2652
   End
   Begin VB.Label Label4 
      Caption         =   "你只需要把邮件里面的数据复制过来即可，不必添加 -或者空格，当然，如果你乐意，你也可以添加，剩下的我来处理。"
      ForeColor       =   &H8000000D&
      Height          =   540
      Left            =   240
      TabIndex        =   7
      Top             =   1920
      Width           =   3432
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      Caption         =   "激活码："
      Height          =   180
      Left            =   240
      TabIndex        =   2
      Top             =   1440
      Width           =   720
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      Caption         =   "教材码："
      Height          =   180
      Left            =   240
      TabIndex        =   1
      Top             =   840
      Width           =   720
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      Caption         =   "序列号："
      Height          =   180
      Left            =   240
      TabIndex        =   0
      Top             =   240
      Width           =   720
   End
End
Attribute VB_Name = "Form2"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As String, ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long


Private Sub Command1_Click()
    On Error Resume Next
    ShellExecute Me.hwnd, "open", "http://www.neie.edu.cn/License/LicenseActivation.aspx", "", "", 5
End Sub

Private Sub Command2_Click()
Dim pStr As String

    PName(0) = "UserID"
    PVal(0) = UserID
    PName(1) = "LevelID"
    PVal(1) = LevelID
    PName(2) = "SerialNumber"
    PVal(2) = Replace(Replace(Text1.Text, " ", ""), "-", "")
    PName(3) = "LicenseNumber"
    PVal(3) = Replace(Replace(Text2.Text, " ", ""), "-", "")
    PName(4) = "ActivationCode"
    PVal(4) = Replace(Replace(Text3.Text, " ", ""), "-", "")
    PName(5) = "IsActive"
    PVal(5) = "2"
    
    PNeedEncode(0) = True
    PNeedEncode(1) = True
    PNeedEncode(2) = True
    PNeedEncode(3) = True
    PNeedEncode(4) = True
    PNeedEncode(5) = True
    pStr = SoapPost("SetListeningUserActiveInfo", 6)
    
    If GetPara(pStr, "SetListeningUserActiveInfoResult") <> 1 Then
        
        MsgBox GetPara(pStr, "ReturnMessage"), vbCritical, "激活失败"
         
    Else
    
        MsgBox "激活成功"
        
        Unload Form2
        
        Form1.Label5.Caption = "Initialization completed"
        
    End If
    
End Sub


