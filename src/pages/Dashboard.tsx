
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Clock, 
  Award, 
  TrendingUp, 
  Calendar,
  PlayCircle,
  CheckCircle,
  Star,
  Download,
  Users,
  Trophy,
  Target
} from "lucide-react";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const stats = [
    { label: "Courses Completed", value: 12, icon: BookOpen, color: "text-blue-500" },
    { label: "Hours Studied", value: 89, icon: Clock, color: "text-green-500" },
    { label: "Certificates Earned", value: 8, icon: Award, color: "text-purple-500" },
    { label: "Current Streak", value: 15, icon: TrendingUp, color: "text-orange-500" }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete JavaScript Mastery",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 156,
      completedLessons: 117,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      lastAccessed: "2 hours ago",
      nextLesson: "Advanced Array Methods"
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Michael Chen",
      progress: 45,
      totalLessons: 98,
      completedLessons: 44,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      lastAccessed: "1 day ago",
      nextLesson: "Pandas DataFrame Operations"
    },
    {
      id: 3,
      title: "React & Next.js Complete Guide",
      instructor: "Alex Rodriguez",
      progress: 20,
      totalLessons: 201,
      completedLessons: 40,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      lastAccessed: "3 days ago",
      nextLesson: "Component Lifecycle"
    }
  ];

  const recentActivities = [
    { action: "Completed lesson", course: "JavaScript Mastery", time: "2 hours ago", type: "completion" },
    { action: "Started new course", course: "React & Next.js Guide", time: "3 days ago", type: "start" },
    { action: "Earned certificate", course: "Python Basics", time: "1 week ago", type: "certificate" },
    { action: "Completed quiz", course: "Data Science Fundamentals", time: "1 week ago", type: "quiz" }
  ];

  const certificates = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      issueDate: "January 15, 2024",
      instructor: "Sarah Johnson",
      courseHours: 24,
      grade: "A+",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Python for Beginners",
      issueDate: "December 20, 2023",
      instructor: "Dr. Michael Chen",
      courseHours: 18,
      grade: "A",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Web Development Basics",
      issueDate: "November 10, 2023",
      instructor: "Alex Rodriguez",
      courseHours: 32,
      grade: "A+",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Data Analysis with Python",
      issueDate: "October 5, 2023",
      instructor: "Dr. Michael Chen",
      courseHours: 28,
      grade: "A",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Advanced JavaScript",
      issueDate: "September 15, 2023",
      instructor: "Sarah Johnson",
      courseHours: 40,
      grade: "A+",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      issueDate: "August 20, 2023",
      instructor: "Dr. Emily Watson",
      courseHours: 35,
      grade: "A",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Cloud Computing Fundamentals",
      issueDate: "July 10, 2023",
      instructor: "David Park",
      courseHours: 25,
      grade: "A+",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Mobile App Development",
      issueDate: "June 5, 2023",
      instructor: "Maria Garcia",
      courseHours: 30,
      grade: "A",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    }
  ];

  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 3);

  const CertificateCard = ({ certificate }: { certificate: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800">
      <div className="relative">
        <img 
          src={certificate.image} 
          alt={certificate.title}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
        <div className="absolute bottom-2 left-2 right-2">
          <Badge className="bg-green-500 text-white text-xs">
            Certified
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {certificate.title}
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Instructor:</span>
            <span className="font-medium">{certificate.instructor}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Hours:</span>
            <span className="font-medium">{certificate.courseHours}h</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Grade:</span>
            <Badge variant="outline" className="text-green-600 border-green-600">
              {certificate.grade}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Issued:</span>
            <span className="font-medium">{certificate.issueDate}</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full mt-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-950">
          <Download className="h-4 w-4 mr-2" />
          Download Certificate
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
              <p className="text-muted-foreground">Track your learning progress and achievements</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">
                        <AnimatedCounter from={0} to={stat.value} />
                      </p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <PlayCircle className="h-5 w-5" />
                    <span>Continue Learning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {enrolledCourses.slice(0, 2).map((course) => (
                    <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg mb-4 last:mb-0 hover:bg-muted/50 transition-colors">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Next: {course.nextLesson}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-xs text-muted-foreground">{course.progress}%</span>
                        </div>
                      </div>
                      <Button size="sm">
                        <PlayCircle className="h-4 w-4 mr-1" />
                        Continue
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'completion' ? 'bg-green-100 text-green-600' :
                          activity.type === 'certificate' ? 'bg-purple-100 text-purple-600' :
                          activity.type === 'start' ? 'bg-blue-100 text-blue-600' :
                          'bg-orange-100 text-orange-600'
                        }`}>
                          {activity.type === 'completion' && <CheckCircle className="h-4 w-4" />}
                          {activity.type === 'certificate' && <Award className="h-4 w-4" />}
                          {activity.type === 'start' && <PlayCircle className="h-4 w-4" />}
                          {activity.type === 'quiz' && <Target className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="text-xs text-muted-foreground">{activity.course}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">My Courses</h2>
                <Badge variant="outline">{enrolledCourses.length} Enrolled</Badge>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 right-3 bg-blue-500">
                        {course.progress}% Complete
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Last accessed: {course.lastAccessed}</span>
                          <span>Next: {course.nextLesson}</span>
                        </div>
                        
                        <Button className="w-full">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Continue Learning
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">My Certificates</h2>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">{certificates.length} Earned</Badge>
                  <Button
                    variant="outline"
                    onClick={() => setShowAllCertificates(!showAllCertificates)}
                  >
                    {showAllCertificates ? 'Show Less' : 'View All'}
                  </Button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedCertificates.map((certificate) => (
                  <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Learning Activity</CardTitle>
                <CardDescription>Your recent learning activities and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'completion' ? 'bg-green-100 text-green-600' :
                        activity.type === 'certificate' ? 'bg-purple-100 text-purple-600' :
                        activity.type === 'start' ? 'bg-blue-100 text-blue-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {activity.type === 'completion' && <CheckCircle className="h-5 w-5" />}
                        {activity.type === 'certificate' && <Award className="h-5 w-5" />}
                        {activity.type === 'start' && <PlayCircle className="h-5 w-5" />}
                        {activity.type === 'quiz' && <Target className="h-5 w-5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{activity.action}</h3>
                        <p className="text-muted-foreground">{activity.course}</p>
                        <span className="text-sm text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
