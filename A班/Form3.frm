VERSION 5.00
Begin VB.Form Form3 
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "����"
   ClientHeight    =   1665
   ClientLeft      =   30
   ClientTop       =   360
   ClientWidth     =   2970
   Icon            =   "Form3.frx":0000
   LinkTopic       =   "Form3"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   1665
   ScaleWidth      =   2970
   ShowInTaskbar   =   0   'False
   StartUpPosition =   3  '����ȱʡ
   Begin VB.CommandButton Command2 
      Caption         =   "����"
      Height          =   372
      Left            =   120
      TabIndex        =   9
      Top             =   1200
      Width           =   852
   End
   Begin VB.CommandButton Command1 
      Caption         =   "ȷ��"
      Height          =   372
      Left            =   1920
      TabIndex        =   8
      Top             =   1200
      Width           =   972
   End
   Begin VB.TextBox Text3 
      Height          =   264
      Left            =   2040
      TabIndex        =   6
      Text            =   "Text3"
      Top             =   720
      Width           =   612
   End
   Begin VB.TextBox Text2 
      Height          =   264
      Left            =   1080
      TabIndex        =   4
      Text            =   "Text2"
      Top             =   720
      Width           =   612
   End
   Begin VB.TextBox Text1 
      Height          =   264
      Left            =   720
      TabIndex        =   1
      Text            =   "Text1"
      Top             =   240
      Width           =   612
   End
   Begin VB.Label Label5 
      AutoSize        =   -1  'True
      Caption         =   "��"
      Height          =   180
      Left            =   2760
      TabIndex        =   7
      Top             =   720
      Width           =   180
   End
   Begin VB.Label Label4 
      AutoSize        =   -1  'True
      Caption         =   "-"
      Height          =   180
      Left            =   1800
      TabIndex        =   5
      Top             =   720
      Width           =   96
   End
   Begin VB.Label Label3 
      AutoSize        =   -1  'True
      Caption         =   "����ʱ�䣺"
      Height          =   180
      Left            =   120
      TabIndex        =   3
      Top             =   720
      Width           =   900
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      Caption         =   "������"
      Height          =   180
      Left            =   1440
      TabIndex        =   2
      Top             =   240
      Width           =   540
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      Caption         =   "������"
      Height          =   180
      Left            =   120
      TabIndex        =   0
      Top             =   240
      Width           =   540
   End
End
Attribute VB_Name = "Form3"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Sub Command1_Click()
    
    On Error Resume Next
    
    If Int(Text1.Text) <= 70 Then
        MsgBox "�����������70�֣����Զ�����Ϊ71��"
        mnScore = 71
    ElseIf Int(Text1.Text) > 100 Then
        MsgBox "�������벻����100�֣����Զ�����Ϊ100��"
        mnScore = 100
    Else
        mnScore = Int(Text1.Text)
    End If
    
    Text1.Text = mnScore
    
    
    If Int(Text2.Text) < 60 Then
        MsgBox "������Сʱ����벻С��60�룬���Զ�����Ϊ60��"
        mnTime = 60
    Else
        mnTime = Int(Text2.Text)
    End If
    
    Text2.Text = mnTime
    
    If Int(Text3.Text) <= mnTime Then
        mxTime = mnTime
    Else
        mxTime = Int(Text3.Text)
    End If
    
    Text3.Text = mxTime
    
    Unload Form3

End Sub


Private Sub Command2_Click()
    MsgBox "��ӭʹ�á�", , "��Ϣ"
End Sub

Private Sub Form_Load()

    Text1.Text = mnScore
    Text2.Text = mnTime
    Text3.Text = mxTime

End Sub

