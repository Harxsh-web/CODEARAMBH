import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const Team = () => {
  return (
    <div className='mt-30 p-5'>
      <h2 className=' text-5xl font-semibold' >Meet the Team</h2>
      <div className='flex justify-center'> 
        <Tabs defaultValue="account" className="w-full text-center items-center">
          <TabsList className='bg-transparent'>
            <TabsTrigger value="account">Student Co-ordinators</TabsTrigger>
            <TabsTrigger value="password">Organisers</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>


    </div>
  )
}
